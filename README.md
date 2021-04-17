# Termeh

Modern modular CSS framework contains a set of useful function, mixin and mobile first styles.

## Installation

**Caution:** this package only install as **SCSS** dependency and can't use as css directly!

```bash
npm i -D @bardoui/termeh
```

## Usage

Termeh framework contains four main part:

- the core functionalities (function and mixin)
- custom variable files (optional)
- the reset style
- components and helpers styles

**Note:** the import priority of parts important

```scss
// Core
@import "@vbardo/termeh/scss/core.scss";
// Your custom variable files
@import "my-vars.scss";
@import "my-vars2.scss";
// Reset style
@import "@vbardo/termeh/scss/reset.scss";
// components and styles
@import "@vbardo/termeh/scss/component/button.scss";
@import "@vbardo/termeh/scss/component/layout.scss";
@import "@vbardo/termeh/scss/component/container.scss";
@import "@vbardo/termeh/scss/helper/visibility.scss";
@import "@vbardo/termeh/scss/helper/color.scss";
```

## Docs

Continue reading:

- [Core Functions](docs/CORE.md)
- [Variable System](docs/VAR.md)
- [Predefined Variables](docs/PRE.md)
- [Mixin](docs/MIXIN.md)
- [Helpers](docs/HELPER.md)
- [Components](docs/COM.md)
