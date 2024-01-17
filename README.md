# Sample Integration React Offline

The porsche-design-system uses a CDN by default (which we can not use when offline)

## How to use this

- include this repo in your consumer-repo (with the right version tag, like)
  ``"@porsche-offline-design-system/manager": "https://github.com/Humain-Labs/sample-integration-react-offline.git#v3.9.0"``
- Copy CDN files `cp -r ./node_modules/porsche-design-system-offline/public/. ./public`
- Done. This mostly works


## How to create a new version

- go to ``scripts/transformToOffline.sh`` and change `tag_name` to the version you want to use.
  - There we replace all instances of ``cdn.ui.porsche.(com|cn)`` with a dot (`.`). We replace with an empty string in css so we get `url('/porsche-design-system/fonts/porsche-next..')`, with resolves to the root-url.
  - It creates the files that are required for the CDN (in public/porsche-design-system) by cloning the porsche-design-system - repo and running the appropriate scripts, then copying them to the public-folder.
- run `yarn run transformToOffline`
- replace all instances of @porsche-design-system with @porsche-offline-design-system 
  ``components-js`` is a dependency of ``components-react``
- copy node_modules/@porsche-design-system/components-react & components-js to ./components-react & components-js
- commit your changes
- create a release with the same version as the version of components-react you are using (like `v3.9.0`)

## Todos

- This repo's package.json has ``exports`` which kind of reflect ``exports`` in @porsche-design-system/components-react and @porsche-design-system/components-js (with nesting, careful with the slashes, they need to be different ). This can probably be done more elegant with [portal](https://yarnpkg.com/protocol/portal), link, file or workspace


## FAQ & Tips

- Why not use @porsche-design-system? - It's protected, so you can't host your own packages.
- If you are experimenting with this in the consumer repo run ``rm -r node_modules/.cache || yarn install`` because odd caching things might happen otherwise


## Problems

- The replacement is quite complex and fragile (not sure if it works with another version)
- Not sure if there are more side-effects
- The process is really difficult (and hard to understand, because you wouldn't normally to things like this)
- If you use `http://localhost:3000` you lock in your port (also for your builds, there is no way around). This creates points of failures for developers and further down-stream (like in `DX-Stage`). Using `.` as a replacement might have solved this.


## Unsuccessful Experiments

- ```js
  `${location.protocol + '//' + location.host}`
  ```

  Using location.protocol ( as a replacement for  ``cdn.ui.porsche.(com|cn)`` ) everywhere does not work because ``node_modules/@porsche-design-system/components-js/partials/index.cjs`` does not have the location context (not in browser).
