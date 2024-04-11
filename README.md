# Sample Integration React Offline

This is a test to make the porsche-design-system usable in environments, that have no internet access (it uses a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) by default).

To make this work, we expose the CDN-files (in the public folder), replace the CDN-URLs with a dot and relative URLs (in the CDN and the required packages), rename the required packages ``@porsche-design-system/components-js`` ``@porsche-design-system/components-react`` to ``@porsche-offline-design-system/...`` and expose both in this repo.



## How to use this

- include this repo in your consumer-repo (with the right version tag, like)
  ``"@porsche-offline-design-system/manager": "https://github.com/Humain-Labs/sample-integration-react-offline.git#v3.9.0"``
  
- link components-js and components-react like (yarn > 4)
  
  ```json
  devDependencies: {
        "@porsche-offline-design-system/components-js": "link:./node_modules/@porsche-offline-design-system/manager/components-js",
      "@porsche-offline-design-system/components-react": "link:./node_modules/@porsche-offline-design-system/manager/components-react",
  }
  ```
  
- Symlink (or copy) the CND files to the folder, which is served as root of your URL (Like ``https://localhost/...``). Copying might be required for successful builds. You probably also need to disable tree-shaking, because the files and the CDN are not linked directly (by default).

  - ``ln -s "../node_modules/@porsche-offline-design-system/manager/public/porsche-design-system" "./public/porsche-design-system"``
  - `cp -r ./node_modules/@porsche-offline-design-system/manager/public/. ./public`

  


## How to create a new version (untested)

- ``yarn add @porsche-design-system/components-react@your-version-number``
- go to ``scripts/transformToOffline.sh`` and change `tag_name` to the version you want to use.
  - There we replace all instances of ``cdn.ui.porsche.(com|cn)`` with a dot (`.`). We replace with an empty string in css so we get `url('/porsche-design-system/fonts/porsche-next..')`, with resolves to the root-url.
  - It creates the files that are required for the CDN (in public/porsche-design-system) by cloning the porsche-design-system - repo and running the appropriate scripts, then copying them to the public-folder.
- run `yarn run transformToOffline`
- replace all instances of @porsche-design-system with @porsche-offline-design-system in
   ``components-react`` and ``components-js`` (which is a dependency of ``components-react``).
- copy node_modules/@porsche-design-system/components-react & components-js to ./components-react & components-js
- test run things with ``yarn run dev`` (it uses all the replace)
- commit & push your changes
- create a release with the same version as the version of components-react you are using (like `v3.9.0`)



## Problems with this approach

- [The replacement](https://github.com/Humain-Labs/sample-integration-react-offline/blob/main/scripts/transformPorscheDesignSystem.js) is quite complex and fragile (not sure if it works with another version).
  This currently affects over 40 files ([see full diff of replacements](https://github.com/Humain-Labs/sample-integration-react-offline/commit/b8faaf2e21721327fe57f6b742c8fea999ffeee6)).
- This does not work in folder dephts > 1 and is picky with slashes:
  - If the cdn files live in **example.com/porsche-design-system** this is only usable in
    - Example.com
    - Example.com/foo (<- a trailing slash is not allowed here)
    - ~~Example.com/foo/bar~~ (<- does not work)

  - **example.com/foo/porsche-design-system**
    - Example.com/foo/ (<- a trailing slash is required here)
    - Example.com/foo/bar (<- a trailing slash is not allowed here)
    - ~~Example.com/foo/bar/baz~~ (<- does not work)

- There might me more side-effects



## FAQ & Tips

- Why not use @porsche-design-system namespace (for the package)? - It's protected, so you can't host your own packages. And those are required, because replacements in ``components-react`` and ``components-js`` are required.

- If you are experimenting with this in the consumer repo run ``rm -r node_modules || rm yarn.lock || yarn install`` because odd caching things might happen otherwise

- Don't add ``./components-(js|react)`` as a workspace. Otherwise the folders will not appear when installed (via yarn) and we need them.

- Importing from ``components-react/styles`` directly does not work. Use ``components-js/styles`` instead.

  


## Unsuccessful Experiments

- ```js
  `${location.protocol + '//' + location.host}`
  ```

  Using location.protocol ( as a replacement for  ``cdn.ui.porsche.(com|cn)`` ) everywhere does not work because ``node_modules/@porsche-design-system/components-js/partials/index.cjs`` does not have the location context (not in browser).
