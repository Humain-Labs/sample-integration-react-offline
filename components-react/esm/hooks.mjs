'use client';
import { useContext, useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import { PorscheDesignSystemContext } from './provider.mjs';
import { getMergedClassName } from './utils.mjs';

let skipCheck = false;
/**
 * sets a flag that skips the need for `PorscheDesignSystemProvider` during testing
 * when `process.env.NODE_ENV === 'test'`
 */
const skipCheckForPorscheDesignSystemProviderDuringTests = () => {
    skipCheck = true;
};
const usePrefix = (tagName) => {
    if (process.env.NODE_ENV === 'test' && skipCheck) {
        return tagName;
    }
    else {
        const { prefix } = useContext(PorscheDesignSystemContext); // eslint-disable-line react-hooks/rules-of-hooks
        if (prefix === undefined) {
            throw new Error('It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.');
        }
        return prefix ? prefix + '-' + tagName : tagName;
    }
};
const useTheme = () => {
    if (process.env.NODE_ENV === 'test' && skipCheck) {
        return 'light';
    }
    else {
        return useContext(PorscheDesignSystemContext).theme; // eslint-disable-line react-hooks/rules-of-hooks
    }
};
const useEventCallback = (ref, eventName, eventHandler) => {
    useEffect(() => {
        const { current } = ref;
        if (current && eventHandler) {
            current.addEventListener(eventName, eventHandler);
            return () => current?.removeEventListener(eventName, eventHandler);
        }
    }, [eventHandler]); // eslint-disable-line react-hooks/exhaustive-deps
};
const useMergedClass = (ref, className) => {
    const prevComponentClassName = useRef();
    return useMemo(() => {
        if (!className) {
            return undefined;
        }
        const { current } = ref;
        let newClassName = className;
        if (current) {
            newClassName = getMergedClassName(current.className, prevComponentClassName.current, className);
            // the jsx does not override className when the attribute changes
            current.className = newClassName;
        }
        prevComponentClassName.current = className;
        return newClassName;
    }, [className]); // eslint-disable-line react-hooks/exhaustive-deps
};
const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const useToastManager = () => {
    const tagName = usePrefix('p-toast');
    return {
        addMessage: (message) => {
            const toast = document.body.querySelector(tagName);
            customElements.whenDefined(tagName).then(() => toast.addMessage(message));
        },
    };
};

export { skipCheckForPorscheDesignSystemProviderDuringTests, useBrowserLayoutEffect, useEventCallback, useMergedClass, usePrefix, useTheme, useToastManager };
