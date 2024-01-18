# Sample Integration React Offline

The porsche-design-system uses a CDN by default (which we can not use when offline).

To make it work, we expose the CDN-files (in the public folder), replace the CDN-URLs with a dot (in the CDN and the required packages), rename the required packages ``@porsche-design-system/components-js`` ``@porsche-design-system/components-react`` to ``@porsche-offline-design-system/...`` and expose both in this repo.



## How to use this

- include this repo in your consumer-repo (with the right version tag, like)
  ``"@porsche-offline-design-system/manager": "https://github.com/Humain-Labs/sample-integration-react-offline.git#v3.9.0"``
  
- link components-js and components-react like
  
  ```json
  devDependencies: {
        "@porsche-offline-design-system/components-js": "link:./node_modules/@porsche-offline-design-system/manager/components-js",
      "@porsche-offline-design-system/components-react": "link:./node_modules/@porsche-offline-design-system/manager/components-react",
  }
  ```
  
- Symlink (or copy) the CND files to the folder, which is served as root of your URL (Like ``https://localhost/...``). Copying might be required for successful builds. You also need to disable tree-shaking, because the files and the CDN are not linked directly (by default).

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

## Todos

- Currently the consumer has to include ``components-js`` and ``components-react``. It would be nice for this repo to have those as [linked](https://yarnpkg.com/protocol/link) dependencies ([file](https://yarnpkg.com/protocol/file) does not work, because the folders don't exist when yarn collect dependencies first), but iI didn't get this running (probably because components-react depends on components-js).
- Maybe use [Lerna](https://lerna.js.org/)?


## FAQ & Tips

- Why not use @porsche-design-system? - It's protected, so you can't host your own packages. And those are required, because replacements in ``components-react`` and ``components-js`` are required.
- If you are experimenting with this in the consumer repo run ``rm -r node_modules || rm yarn.lock || yarn install`` because odd caching things might happen otherwise
- Don't add ``./components-(js|react)`` as a workspace. Otherwise the folders will not appear when installed (via yarn) and we need them.
- Importing from ``components-react/styles`` directly does not work. Use ``components-js/styles`` instead.


## Problems

- The replacement is quite complex and fragile (not sure if it works with another version)
- Not sure if there are more side-effects
- The process is really difficult (and hard to understand, because you wouldn't normally to things like this)


## Unsuccessful Experiments

- ```js
  `${location.protocol + '//' + location.host}`
  ```

  Using location.protocol ( as a replacement for  ``cdn.ui.porsche.(com|cn)`` ) everywhere does not work because ``node_modules/@porsche-design-system/components-js/partials/index.cjs`` does not have the location context (not in browser).
