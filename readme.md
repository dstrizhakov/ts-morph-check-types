# Check types of your TS code by ts-morph library

This module can check types on the following code string.
Im using the tsafe library to check the types additionally.

### How to install:

```sh
  $ git clone https://github.com/dstrizhakov/ts-morph-check-types.git
  $ cd ts-morph-check-types
  $ npm install
```

### How to use:

```sh
const child_process = require("child_process");
let _exec = child_process.exec;
_exec(`CODE=${your ts code} TEST=${your ts tests} FORMAT=${"string"} node index.js`,{},() => {});
```

### Code & Test examples

You can found code and test examples in src/mock folder.

### License

MIT
**Free Software, Hell Yeah!**
