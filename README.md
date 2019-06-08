# argh-matey

Argh matey is a helps you finding the correct CLI command when your users are
submitting jibberish, and you're just trying to understand what on earth
they mean.

## Installation

The package is published in the public npm registry and can be installed by
running:

```bash
npm install --save argh-matey
```

## Usage

```js
const matey = require('argh-matey');
```

We return a single function, `matey`, that accepts the following arguments:

- **argh**, Array, Array of actual commands a user could have submitted.
- **jibberish**, String, The actual received command.

The function will either return `null` or a the command that matches:

```js
matey(['test', 'register', 'publish'], 'tst'); // 'test'
matey(['test', 'register', 'publish'], 'what'); // null
matey(['test', 'register', 'publish'], 'TESS'); // 'test'
```

## License

[MIT](LICENSE)
