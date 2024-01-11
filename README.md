# Sample Integration React Offline

The porsche-design-system uses a cdn by default (which we can not use when offline)

This repo does two things:
- It creates the files that are required for the CDN (in public/porsche-design-system) by cloning the porsche-design-system - repo and running the appropriate scripts, then copying them to public (see ``scripts/transformToOffline.sh``).

  There we replace all instances of ``cdn.ui.porsche.(com|cn)`` with a dot (`.`). We replace with an empty string in css so we get `url('/porsche-design-system/fonts/porsche-next..')`, with resolves to the root-url.

  This files are tracked via git, so we can include them in porsche-carui--dx20 via package.json.

- If offers a script (``scripts/transformPorscheDesignSystem.js``) which goes through your `./node_modules/@porsche-design-system` and replaces all instances of `cdn.ui.porsche.(com|cn)` with a `.` . This is used in the downstream repository (which includes this via `package.json`.



## New Version

- Go to ``scripts/transformToOffline.sh`` and change `tag_name` to the version you want to use.
- run `yarn run transformToOffline`
- commit your changes
- create a release with the same version as the version of components-react you are using (like `v3.9.0`)
- In the consumer-repo (the one which uses this)
  - update the @porsche-design-system to the appropriate version
  - include this repo in your consumer-repo (with the right version tag, like)
    ``"porsche-design-system-offline": "https://github.com/Humain-Labs/sample-integration-react-offline.git#v3.9.0"``
  - Copy CDN files `cp -r ./node_modules/porsche-design-system-offline/public/. ./public`
  - Run `transformPorscheDesignSystem.js`. This overrides things in `./node_modules/@porsche-design-system` so you have to make sure to run `transformPorscheDesignSystem.js` every time you interact with yarn/npm



## Todos

- It would probably be a good idea to track a copy of `./node_modules/@porsche-design-system` with all the replacements in this repo, so you get less problems in the consumer-repo.



## Problems

- The replacement is quite complex and fragile (not sure if it works with another version)
- Having to do do hardcode-replacements in your node_modules is 
- Not sure if there are more side-effects
- The process is really difficult (and hard to understand, because you wouldn't normally to things like this)
- If you use `http://localhost:3000` you lock in your port (also for your builds, there is no way around). This creates points of failures for developers and further down-stream (like in `DX-Stage`). Using `.` as a replacement might have solved this.
- If you want to update your ``@porsche-design-system`` (in the consumer-repo) you also need to update this (which is not obvious)



## Unsuccessful Experiments

- ```js
  `${location.protocol + '//' + location.host}`
  ```

  Using location.protocol ( as a replacement for  ``cdn.ui.porsche.(com|cn)`` ) everywhere does not work because ``node_modules/@porsche-design-system/components-js/partials/index.cjs`` does not have the location context (not in browser).
