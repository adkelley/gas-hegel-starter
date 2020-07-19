# gas-hegel-starter
Template for new Google Apps Script using clasp (Command Line Apps Script
Projects) combined with Hegel, an advanced static type checker 

## Included
* [clasp](https://github.com/google/clasp)
* [hegel](https://hegel.js.org/)
* [flow-remove-types](https://flow.org/en/docs/tools/flow-remove-types/)
* [webpack](https://webpack.js.org/)
* [remove-flow-types-loader](https://www.npmjs.com/package/remove-flow-types-loader)
* [gas-webpack-plugin](https://github.com/fossamagna/gas-webpack-plugin)
* [watch](https://github.com/mikeal/watch)

## Installation
* Clone this repository
* Run `yarn install`

## Usage
* Create a project `yarn clasp:create` or clone one `npx clasp clone scriptId | scriptURL`
* Run `npx hegel` to compile your source files.
* Once your code compiles, run `yarn build` to remove the typings, followed by `yarn push` to write your files to `dist` and publish to `script.google.com`.  There is also, `yarn watch` to watch the `dist` directory for any changes and push them to `script.google.com`.

## License
Licensed under the MIT license which can be found in the file `LICENSE`

## Notes
* Its early days for Hegel and therefore it doesn't produce the right result sometimes.  Case in point is assign `global.goGet` and `global.doPost` in `src/index.js`. As a work around, I've added `@hegel-issue` annotations to both.

## TODO:
* add support for eslint and prettierjs
* write a `hegel` loader that will proceed to build the project upon no errors
