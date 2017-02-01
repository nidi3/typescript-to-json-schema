# typescript-to-json-schema

Inspired by [`YousefED/typescript-json-schema`](https://github.com/YousefED/typescript-json-schema). Here's the differences list:

* this implementation does not use `typeChecker.getTypeAtLocation()` (so probably it keeps correct type aliases)
* the following features are not supported yet:
  * JSDoc annotations (planned)
  * command line options (planned)
  * `Array<Type>` notation (planned)
  * `T & U` type intersection (planned)
  * `class` types (not planned)
  * `typeof` types (not planned)
* processing AST and formatting JSON schema have been split into two independent steps
* not exported types, interfaces, enums are not exposed in the `definitions` section in the JSON schema

## Usage

```bash
npm install typescript-to-json-schema
./node_modules/.bin/typescript-to-json-schema \
    --path 'my/project/**.*.ts' \
    --type 'My.Type.Full.Name'
```

## Current state

* `interface` types
* `enum` types
* `union`, `tuple`, `type[]` types
* `string`, `boolean`, `number` types
* `"value"`, `123`, `true`, `false`, `null` literals
* type aliases
* generics