# Next.js plugin TypeScriptwarning ignore

> WARNING in ./an_awesome_pathname/awesome_file.ts 406:0-198
> "export 'EpicInterface' was not found in './interfaces'

Get rid of this ?

## Usage

In your `next.config.js`

```js
const withIgnoreBabelTypescriptTypeWarnings = require("next-ignore-babel-typescript-type-warnings");

const config = withIgnoreBabelTypescriptTypeWarnings();

module.exports = config;
```

## License

[Mozilla Public License 2.0](./LICENSE.md)
