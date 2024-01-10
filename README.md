# Sample Integration React Offline

The porsche-design-system uses a cdn by default (which we can not use when offline)

This repo does two things:
- It creates the files that are required for the CDN (in public/porsche-design-system) by cloning the porsche-design-system - repo and running the appropriate scripts, then copying them to public (see ``scripts/transformPorscheDesignSystem.sh``). 
This files are tracked via git, so we can include them in porsche-carui--dx20 via package.json.

- If offers a script (``scripts/transformPorscheDesignSystem.js``) which goes through your `./node_modules/@porsche-design-system` and replaces all instances of `cdn.ui.porsche.com` with something static like `localhost:3000` or just `.` (can be configured)

## Problems

Statically replacing the URL comes with an issue:
- This only runs a single static url and port (which can not be defined runtime, but only build-time).
    - Things break if anybody uses another IP or port
    - ``DX-Stage`` needs to use the same port
    - You can not use this in the network (vite --host)
    
I experimented with using
```js
`${location.protocol + '//' + location.host}`
```
but ``node_modules/@porsche-design-system/components-js/partials/index.cjs`` does not have the location context (not in browser).

Maybe "." instead of "http://localhost:3010" works?

## Change the port

- in scripts/buildCdnFiles.sh
- in vite.config.ts