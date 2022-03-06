# Termeh

Modern modular CSS framework contains a set of useful function, mixin and mobile first styles.

## Installation

**Caution**: this package only install as **SCSS** dependency and can't use as css directly!

```bash
npm i -D @bardoui/termeh
```

## Usage

**Note** import priority is important!

```scss
// required
@use "@bardoui/termeh/termeh.scss" as T;
@use "vars"; // local vars file
@use "@bardoui/termeh/styles.scss"; // contains reset and global styling (heading, image, table)
// optional ...
@use "@bardoui/termeh/components/all.scss";
```

### Structure

You can use `all.scss` file inside sub-directory to import all directory content.

- termeh.scss _(core functions)_
- styles.scss _(base styles)_
- components
  - all.scss
  - button.scss
  - card.scss
  - header.scss
  - icon.scss
  - link.scss
  - meta.scss
  - tag.scss
- form
  - all.scss
  - checkbox.scss
  - field.scss
  - input.scss
  - select.scss
  - textarea.scss
- helpers
  - all.scss
  - attachment.scss
  - layout.scss
  - typography.scss
  - visibility.scss
- layout
  - all.scss
  - breadcrumb.scss
  - components.scss
  - container.scss
  - content.scss
  - gaper.scss
  - grid.scss
  - landscape.scss
  - layout.scss
  - padder.scss

### Predefined Variables

| Definition                                   | Value                                    | Usability                                          |
| -------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| `define-color("base")`                       | `white`                                  | base theme color                                   |
| `define-variant("base", "color")`            | `#081e30`                                | text color                                         |
| `define-variant("base", "code")`             | `inherit`                                | code block color                                   |
| `define-variant("base", "strong")`           | `inherit`                                | strong text color                                  |
| `define-variant("base", "section")`          | `#f8f9fa`                                | section background                                 |
| `define-variant("base", "separator")`        | `#e1e6ea`                                | separator background                               |
| `define-variant("base", "box")`              | `#ffffff`                                | boxes color (e.g. card)                            |
| `define-color("inverse")`                    | `#081e30`                                | base inverse color                                 |
| `define-variant("inverse", "color")`         | `white`                                  | inverse text color                                 |
| `define-variant("inverse", "code")`          | `inherit`                                | inverse code block color                           |
| `define-variant("inverse", "strong")`        | `inherit`                                | inverse strong text color                          |
| `define-variant("inverse", "separator")`     | `#414447`                                | inverse separator background                       |
| `define-variant("inverse", "section")`       | `#373f46`                                | inverse section background (e.g. code block)       |
| `define-variant("inverse", "box")`           | `#081e30`                                | inverse boxes color (e.g. card)                    |
| `color.define-color("table")`                | `white`                                  | table background                                   |
| `define-variant("table", "color")`           | `null`                                   | table text color                                   |
| `define-variant("table", "divider")`         | `T.color("shade")`                       | table divider color                                |
| `define-variant("table", "separator")`       | `T.variant("base", "separator")`         | table separator color                              |
| `define-variant("table", "even")`            | `variant("base", "section")`             | table even row background                          |
| `define-variant("table", "sort")`            | `rgba(T.variant("shade", "mute"), 0.1)`  | table sorted column background                     |
| `define-variant("table", "hover")`           | `rgba(T.variant("shade", "mute"), 0.25)` | table hover row background                         |
| `define-color("input")`                      | `white`                                  | input background                                   |
| `define-variant("input", "border")`          | `T.variant("base", "separator")`         | input border                                       |
| `define-variant("input", "placeholder")`     | `T.variant("shade", "mute")`             | input placeholder color                            |
| `define-variant("input", "disabled")`        | `#f0f2f5`                                | input disabled background                          |
| `define-variant("input", "disabled-border")` | `#e1e6ea`                                | input disabled border                              |
| `define-variant("input", "disabled-color")`  | `#879aab`                                | input disabled color                               |
| `define-palette("shade")`                    | `#8d99ae`                                | shade palette base                                 |
| `define-palette("primary")`                  | `#2196f3`                                | primary palette base                               |
| `define-palette("error")`                    | `#c00021`                                | error palette base                                 |
| `define-palette("success")`                  | `#0ead69`                                | success palette base                               |
| `define("base", "direction")`                | `ltr`                                    | base direction                                     |
| `define("base", "min-width")`                | `300px`                                  | min document width                                 |
| `define("line-height", "normal")`            | `1.6em`                                  | base line-height                                   |
| `define("line-height", "medium")`            | `1.4em`                                  | medium text line-height                            |
| `define("line-height", "large")`             | `1.2em`                                  | large line-height                                  |
| `define("line-height", "inline")`            | `1.8em`                                  | inline element line-height (e.g. tag)              |
| `define("radius", "normal")`                 | `3px`                                    | base element border-radius                         |
| `define("radius", "rounded")`                | `290486px`                               | rounded element border-radius                      |
| `define("radius", "circle")`                 | `50%`                                    | circular element border-radius                     |
| `define("media-query", "ignore")`            | `()`                                     | media queries to ignore in iterations              |
| `define("font", "size")`                     | `12px`                                   | base font size                                     |
| `define("font", "family")`                   | `"'Segoe UI', Tahoma, Geneva, Verdana"`  | base font family                                   |
| `define("font", "code-family")`              | `monospace`                              | code font family                                   |
| `define("font", "code-size")`                | `1rem`                                   | code font size                                     |
| `define("scroll", "size")`                   | `8px`                                    | default scroll size                                |
| `define("scroll", "track")`                  | `variant("base", "section")`             | default scroll track background                    |
| `define("scroll", "thumb")`                  | `variant("base", "separator")`           | default scroll thumb color                         |
| `define("overlay", "background")`            | `rgba(white, 0.75)`                      | overlay background                                 |
| `define("overlay", "color")`                 | `inherit`                                | overlay color                                      |
| `define("overlay", "filter")`                | `none`                                   | overlay backdrop-filter                            |
| `define("strong", "weight")`                 | `bold`                                   | strong text color                                  |
| `define("decorator", "size")`                | 2px                                      | decorator size                                     |
| `define("spinner", "size")`                  | 2rem                                     | spinner size                                       |
| `define("transition", "duration")`           | `250ms`                                  | default transition duration                        |
| `define("transition", "ease")`               | `ease`                                   | default transition ease                            |
| `define("image", "sizes")`                   | `()`                                     | not iterable size to include in image sizes        |
| `define("table", "colors")`                  | `()`                                     | not iterable color to include in table colors      |
| `define("grid", "units"`                     | `()`                                     | not iterable unit to include in grid units         |
| `define("grid", "gaps"`                      | `()`                                     | not iterable gap to include in grid gaps           |
| `define("container", "gaps"`                 | `()`                                     | not iterable gap to include in container gaps      |
| `define("container", "desktop"`              | `960px`                                  | container desktop width                            |
| `define("container", "widescreen"`           | `1200px`                                 | container widescreen width                         |
| `define("gaper", "gaps"`                     | `()`                                     | not iterable gap to include in gaper gaps          |
| `define("content", "gaps"`                   | `()`                                     | not iterable gap to include in content gaps        |
| `define("content", "colors")`                | `()`                                     | not iterable color to include in content colors    |
| `define("landscape", "gaps"`                 | `()`                                     | not iterable gap to include in landscape gaps      |
| `define("padder", "gaps"`                    | `()`                                     | not iterable gap to include in padder gaps         |
| `define("input", "colors")`                  | `()`                                     | not iterable color to include in input colors      |
| `define("input", "gaps"`                     | `()`                                     | not iterable gap to include in input gaps          |
| `define("button", "sizes"`                   | `()`                                     | not iterable size to include in button sizes       |
| `define("button", "colors")`                 | `()`                                     | not iterable color to include in button colors     |
| `define("tag", "size"`                       | `0.9em`                                  | default tag font-size                              |
| `define("tag", "sizes"`                      | `()`                                     | not iterable size to include in tag sizes          |
| `define("tag", "colors")`                    | `()`                                     | not iterable color to include in tag colors        |
| `define("card", "gaps" )`                    | `()`                                     | not iterable gap to include in card gaps           |
| `define("card", "colors")`                   | `()`                                     | not iterable color to include in card colors       |
| `define("card", "sizes")`                    | `()`                                     | list of card sizes `("small" 10em, "medium" 20em)` |
| `define("card", "border" )`                  | `null`                                   | default card border                                |
| `define("card", "shadow")`                   | `a soft shadow`                          | default card shadow                                |
| `define("card", "border-{$color}")`          | `null`                                   | colored card border                                |
| `define("card", "shadow-{$color}")`          | `null`                                   | colored card shadow                                |
| `define("header", "gaps"`                    | `()`                                     | not iterable gap to include in header gaps         |
| `define("header", "colors")`                 | `()`                                     | not iterable color to include in header colors     |
| `define("icon", "sizes"`                     | `()`                                     | not iterable size to include in icon sizes         |
| `define("icon", "colors")`                   | `()`                                     | not iterable color to include in icon colors       |
| `define("icon", "action-filter")`            | `grayscale(0.5)`                         | action icon image filter                           |
| `define("icon", "action-hover-filter")`      | `grayscale(0)`                           | action icon hover image filter                     |
| `define("link", "colors")`                   | `()`                                     | not iterable color to include in link colors       |
| `define("meta", "colors")`                   | `()`                                     | not iterable color to include in meta colors       |
| `define-size("small", 0.8em, true)`          | `0.8em`                                  | small text size (`<small>`)                        |
| `define-size("normal", 1em, true)`           | `1em`                                    | normal size (`<h6>`)                               |
| `define-size("medium", 1.25em, true)`        | `1.25em`                                 | normal size (`<h5>`)                               |
| `define-size("large", 1.5em, true)`          | `1.5em`                                  | normal size (`<h4>`)                               |
| `define-size("big", 2em, true)`              | `2em`                                    | normal size (`<h3>`)                               |
| `define-size("huge", 2.5em, true)`           | `2.5em`                                  | normal size (`<h2>`)                               |
| `define-size("massive", 3em, true)`          | `3em`                                    | normal size (`<h1>`)                               |
| `define-gap("macro", 1.6rem, false)`         | `1.6rem                                  | used for outer gaps                                |
| `define-gap("micro", 0.5rem, false)`         | `0.5rem                                  | used for inner gaps                                |
| `define-gap("mini", 0.5em, true)`            | `0.5em                                   | used for iterable gaps                             |
| `define-gap("small", 0.85em, true)`          | `0.85em                                  | used for iterable gaps                             |
| `define-gap("normal", 1em, true)`            | `1em                                     | used for iterable gaps                             |
| `define-gap("medium", 1.5em, true)`          | `1.5em                                   | used for iterable gaps                             |
| `define-gap("large", 2em, true)`             | `2em                                     | used for iterable gaps                             |
| `define-gap("huge", 2.5em, true)`            | `2.5em                                   | used for iterable gaps                             |
| `define-gap("massive", 3em, true)`           | `3em                                     | used for iterable gaps                             |
| `define-unit("full", 100%, true)`            | `100%`                                   | used for iteration (default grid system use units) |
| `define-unit("half", 50%, true)`             | `50%`                                    | used for iteration (default grid system use units) |
| `define-unit("1-of-3", 33.3333%, true)`      | `33.3333%`                               | used for iteration (default grid system use units) |
| `define-unit("2-of-3", 66.6666%, true)`      | `66.6666%`                               | used for iteration (default grid system use units) |
| `define-unit("1-of-4", 25%, true)`           | `25%`                                    | used for iteration (default grid system use units) |
| `define-unit("2-of-4", 50%, true)`           | `50%`                                    | used for iteration (default grid system use units) |
| `define-unit("3-of-4", 75%, true)`           | `75%`                                    | used for iteration (default grid system use units) |
| `define-unit("1-of-5", 20%, true)`           | `20%`                                    | used for iteration (default grid system use units) |
| `define-unit("2-of-5", 40%, true)`           | `40%`                                    | used for iteration (default grid system use units) |
| `define-unit("3-of-5", 60%, true)`           | `60%`                                    | used for iteration (default grid system use units) |
| `define-unit("4-of-5", 80%, true)`           | `80%`                                    | used for iteration (default grid system use units) |
| `define-unit("1-of-7", 14.2857%, true)`      | `14.2857%`                               | used for iteration (default grid system use units) |
| `define-unit("2-of-7", 28.5714%, true)`      | `28.5714%`                               | used for iteration (default grid system use units) |
| `define-unit("3-of-7", 42.8571%, true)`      | `42.8571%`                               | used for iteration (default grid system use units) |
| `define-unit("4-of-7", 57.1428%, true)`      | `57.1428%`                               | used for iteration (default grid system use units) |
| `define-unit("5-of-7", 71.4285%, true)`      | `71.4285%`                               | used for iteration (default grid system use units) |
| `define-unit("6-of-7", 85.7142%, true)`      | `85.7142%`                               | used for iteration (default grid system use units) |

### Core

```scss
// Contrast
@function luminance($color);
@function darkest($color1, $color2);
@function lightest($color1, $color2);
@function contrast-ratio($back, $color);
@function tone($color);
@function contrast($base, $color1, $color2);
@function harmony($base, $color1, $color2);

// Palette
@function palette($color, $variant);

// Breakpoint
// Devices: tablet, desktop, widescreen, fullhd
@function breakpoint($device);
// Names: until-fullhd, until-widescreen, until-desktop, tablet, desktop, widescreen, fullhd, mobile, tablet-only, desktop-only, widescreen-only
@function media-query($name);
@function breakpoints();
@function media-queries($includes: ());
@mixin from($device);
@mixin until($device);
@mixin non-touch();
@mixin touch();
@mixin mobile();
@mixin tablet();
@mixin tablet-only();
@mixin until-desktop();
@mixin desktop();
@mixin desktop-only();
@mixin until-widescreen();
@mixin widescreen();
@mixin widescreen-only();
@mixin until-fullhd();
@mixin fullhd();

// Color
@mixin define-color($name, $color);
@mixin define-palette($name, $color);
// Default Ui Variants: active, active-inverse, light, light-inverse, readable, readable-inverse, mute, mute-inverse, color, color-inverse, decorator, decorator-inverse
@mixin define-variant($name, $variant, $color);
@function color($name, $inverse: false);
@function variant($name, $variant, $fallback: null);
@function colors($only: ()); // only palette colors

// Fonts
@mixin define-size($name, $size, $iterable: true);
@function size($name);
@function sizes($includes: ());
// Names: lighter, light , normal, medium , semibold, bold , bolder
@function font-weight($name);
@function font-weights($only: ());

// Gaps
@mixin define-gap($name, $gap, $iterable: true);
@function gap($name);
@function gaps($includes: ());

// Units
@mixin define-unit($name, $unit, $iterable: true);
@function unit($name);
@function units($includes: ());

// Var
@mixin define($com, $prop, $v);
@function var($com, $prop, $fallback: null);
@mixin ltr();
@mixin rtl();

// Utils
@function negate($value);
@mixin unify-parent($child);

// UI
@function shadow($x, $y, $color, $soft: false);
@function control-padding();
@mixin transition($field);
@mixin disabled();
@mixin clearfix();
@mixin overflow-touch();
@mixin locked();
@mixin unselectable();
@mixin selectable();
@mixin placeholder;
@mixin reset();
@mixin control();
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null);
@mixin scrollable($color);
@mixin scroll-color($color);
@mixin spinner($size, $color, $width);
@mixin spinner-color($color);
@mixin loader($size, $color, $width);
@mixin loader-color($color);
@mixin overlay($color, $filter);
```

### Base

- **hr**: `is-marginless`
- **p**: `is-marginless`
- **h[1-6]**: `is-marginless`
- **img**: `is-centered`, `is-{size}`
  - **Variables** _[image]_: `sizes`
- **table**: `is-fullwidth`, `is-stripped`, `is-hoverable`, `is-{color}`
  - **Variables** _[table]_: `colors`
  - **Container**: `.table-container` scrollable table wrapper
  - **tr**: `is-even`, `is-expanded`
    - **.extra**: extra content inside table row to show/hide with `.is-expanded` modifier
    - **th**: `is-center-aligned`, `is-right-aligned`, `is-left-aligned`, `is-filler`, `is-multiline`, `is-sorted`, `is-sortable`, `is-asc`, `is-desc`
    - **td**: `is-center-aligned`, `is-right-aligned`, `is-left-aligned`, `is-filler`, `is-multiline`, `is-sorted`

### Components

- **button**: `is-loading`, `is-rounded`, `is-disabled`, `is-simple`, `is-{size}`, `is-{color}`

  - **Variables** _[button]_: `colors`, `sizes`

- **card**: `is-top-decorated`, `is-bottom-decorated`, `is-loading`, `is-overlaid`, `is-{gap}-padded`, `is-{color}`, `is-{card-size}`
  - **Variables** _[card]_: `gaps`, `colors`, `sizes ('small' 20em, 'large' 30em)`, `border`, `shadow`, `border-{color}`, `shadow-{color}`
  - **.separator**: `is-attached`
  - **.section**: `is-header`, `is-footer`, `is-attached`, `is-secondary`
  - **.overlay**
- **header**: `is-marginless`, `is-left-decorated`, `is-right-decorated`, `is-{gap}-padded`, `is-{color}`
  - **Variables** _[header]_: `gaps`, `colors`
  - **h[1-6]**
- **icon**: `is-outline`, `is-action`, `is-loading`, `is-{size}`, `is-{color}`, `is-disabled`

  - **Variables** _[icon]_: `sizes`, `colors`, `action-filter`, `action-hover-filter`
  - **img**
  - **svg**

- **link**: `is-{color}`
  - **Variables** _[link]_: `colors`
- **meta**: `is-action`, `is-{color}`
  - **Variables** _[meta]_: `colors`
- **tag**: `is-loading`, `is-light`, `is-rounded`, `is-{size}`, `is-{color}`
  - **Variables** _[tag]_: `size`, `sizes`, `colors`

### Form

- **checkbox**, **radio**: `is-{color}`, `is-disabled`
  - **Variables** _[input]_: `colors`
  - **sample**: `<label class="checkbox" for="chk1"><input type="checkbox" id="chk1"> Select</label>`
- **field**: `is-marginless`, `is-required`, `is-{color}`, `is-failed`
  - **Variables** _[input]_: `colors`
  - **label**
  - **.help**
  - **.error**
  - **.input**
  - **.input-like**
- **input**: `is-focused`, `is-failed`, `is-{gap}-gaped`, `is-{color}`, `is-disabled`
  - **Variables** _[input]_: `colors`, `gaps`
  - **.separator**
  - **.gutter**
  - **input**
- **select**: `is-focused`, `is-failed`, `is-{color}`, `is-disabled`
  - **Variables** _[input]_: `colors`
- **textarea**: `is-focused`, `is-failed`, `is-{color}`, `is-disabled`
  - **Variables** _[input]_: `colors`

### Helpers

- **attachment**: `is-attached`, `is-left-attached`, `is-left-top-attached`, `is-left-bottom-attached`, `is-right-attached`, `is-right-top-attached`, `is-right-bottom-attached`, `is-top-attached`, `is-top-left-attached`, `is-top-right-attached`, `is-bottom-attached`, `is-bottom-left-attached`, `is-bottom-right-attached`
- **layout**: `is-clearfix`, `is-ltr`, `is-rtl`, `is-clipped`, `is-radiusless`, `is-shadowless`, `is-clickable`, `is-unselectable`, `is-selectable`, `is-locked`, `is-scrollable`
- **typography**: `is-italic`, `is-underline`, `is-undecorated`, `is-capitalized`, `is-lowercase`, `is-uppercase`, `is-{size}-sized`, `is-{weight}-weighted`, `is-{align}-aligned`, `is-{color}-colored`
- **visibility**: `is-hidden`, `is-until-fullhd-hidden`, `is-until-widescreen-hidden`, `is-until-desktop-hidden`, `is-mobile-only`, `is-tablet-only`, `is-desktop-only`, `is-widescreen-only`, `is-fullhd-only`, `is-mobile-hidden`, `is-tablet-hidden`, `is-desktop-hidden`, `is-widescreen-hidden`, `is-fullhd-hidden`, `is-tablet-only-hidden`, `is-desktop-only-hidden`, `is-widescreen-only-hidden`, `is-touch-only`, `is-touch-hidden`

### Layout

- **breadcrumb**:
  - **.separator**
  - **.active**
- **components**: `is-{align}-aligned`, `is-{justify}-justified`
  - **.filler**
  - **.separator**
- **container**: `is-marginless`, `is-fullwidth`, `is-paddingless`, `is-{gap}-padded`
  - **Variables** _[container]_: `gaps`, `desktop`, `widescreen`
- **content**: `is-centered`, `is-loading`, `is-overlaid`, `is-paddingless`, `is-{gap}-padded`, `is-{color}`
  - **Variables** _[content]_: `gaps`, `colors`
  - **.overlay**
- **gaper**: `is-stacked`, `is-stacked-reverse`, `is-auto`,`is-{gap}-gaped`, `is-{align}-aligned`, `is-{justify}-justified`, `is-{device}-stacked`, `is-{device}-stacked-reverse`, `is-{device}-{align}-aligned`, `is-{device}-{justify}-justified`

  - **Variables** _[gaper]_: `gaps`
  - **.filler**
  - **.separator**
  - **.gutter**

- **grid**: `is-gapless`, `is-{gap}-gaped`, `is-{align}-aligned`, `is-{justify}-justified`, `is-{device}-{align}-aligned`, `is-{device}-{justify}-justified`
  - **Variables** _[grid]_: `units`, `gaps`
  - **break**:
  - **column**: `is-fit`, `is-{unit}`, `is-{device}-fit`, `is-{device}-{unit}`
- **landscape**: `is-center-snapped`, `is-end-snapped`, `is-mandatory`, `is-stacked`, `is-gapless`, `is-{gap}-gaped`, `is-{align}-aligned`, `is-{justify}-justified`, `is-{device}-stacked`, `is-{device}-{align}-aligned`, `is-{device}-{justify}-justified`
  - **Variables** _[landscape]_: `gaps`
- **layout**: `is-reverse`, `is-horizontal`, `is-horizontal-reverse`, `is-{device}-reverse`, `is-{device}-horizontal`, `is-{device}-horizontal-reverse`
  - **.attachment**
- **padder**: `is-{gap}`
