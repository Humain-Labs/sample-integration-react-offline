# Sample Integration React Offline

- `cd ../`
- `git clone git@github.com:porsche-design-system/porsche-design-system.git porsche-design-system`
- `cd ./porsche-design-system`
- `yarn set version 1.22.19`
- `git checkout tags/components-react-v3.9.0` (change `v3.9.0` version with the desired one)
- `yarn install && yarn build:core-dependencies && yarn build:components-prod && yarn build:components-js-prod && yarn build:components-react`
- `cd ../sample-integration-react-offline`
- `yarn set version 1.22.19`
- Update `package.json` with desired `@porsche-design-system/components-react` version 
- Update `package.json` with desired `transform-porsche-design-system` base url
- `yarn install`
- `yarn transform-porsche-design-system`
- `yarn dev` or `yarn build && yarn preview`