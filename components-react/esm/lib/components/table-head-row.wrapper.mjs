'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PTableHeadRow = forwardRef(({ className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-table-head-row');
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PTableHeadRow };
