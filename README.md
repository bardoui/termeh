# Termeh

Modern modular CSS framework contains a set of useful function, mixin and mobile first styles.

## Installation

**Caution**: this package only install as **SCSS** dependency and can't use as css directly!

```bash
npm i -D @bardoui/termeh
```

## Usage

Termeh framework contains four main part. The following parts should be imported to your sass file in following order:

- the core functionalities (function and mixin)
- custom variable files (optional)
- the reset style
- components

```scss
// Core
@import "@bardoui/termeh/scss/core.scss";
// Your custom variable files
@import "my-vars.scss";
@import "my-vars2.scss";
// Reset style
@import "@bardoui/termeh/scss/reset.scss";
// components and styles
@import "@bardoui/termeh/scss/component/layout.scss";
@import "@bardoui/termeh/scss/component/container.scss";
@import "@bardoui/termeh/scss/component/button.scss";
@import "@bardoui/termeh/scss/component/flex.scss";
```

## Common Concepts

**Caution**: by default non of elements (except `<p>`, `<h1>`-`<h6>`, `.container`, `.input` and `.landscape`) has no gap to another elements. For making gap between elements you must use **gaper** component for nice bi-directional and all side spaces.

Termeh is designed as state based styles. Each state starts with `is-` and each component has it's own states.

**Note**: helper classes is global states and can apply to all elements!

### Available Media Query

Termeh contains following media queries:

- **mobile**: mobile only.
- **tablet**: tablet and larger screen.
- **tablet-only**: tablets only.
- **until-desktop**: all devices until desktop.
- **desktop**: desktop and larger screen.
- **desktop-only**: desktop only.
- **until-widescreen**: all devices until widescreen.
- **widescreen**: widescreen and larger screen.
- **widescreen-only**: widescreen only.
- **until-fullhd**: all devices until full hd.
- **fullhd**: full hd and larger screen.

### Available Font Weight

- **lighter**: equal to font weight _100_.
- **light**: equal to font weight _300_.
- **normal**: equal to font weight _400_.
- **medium**: equal to font weight _500_.
- **semibold**: equal to font weight _600_.
- **bold**: equal to font weight _700_.
- **bolder**: equal to font weight _900_.

## Variable System

In termeh all variable registered and accessed by helper functions.

**Note**: defining variable by helper functions allow to loop over variables and have fallback value.

Termeh contains following var groups:

- **Component**: name based variable for component.
- **Gap**: used for element padding and margin.
- **Unit**: used for element size _(default flex system use unit sizes for column width)_.
- **Color**: used for app color and palette system.
- **Size**: used for inline element size and font size _(image and headings use font sizes for sizing)_
- **Breakpoint _(readonly)_**: used for responsive media queries.
- **Weight _(readonly)_**: used for font weights.

You can see default registered variable list in [\_default.scss](scss/_default.scss) file of termeh source code.

**Note**: register variable as iterable make it available in iterable getter functions.

**Note**: you can remove default iterable registered variable by re-define it as non-iterable variable.

**Note**: termeh use mixin for setters and function for getters and iterables.

### Register Variables

#### \_var

Register variable for component.

```scss
// Signature
@mixin _var($component, $property, $value);
// Example
@include _var("sidebar", "background", white);
@include _var("card", "colors", ("violet" "teal"));
```

#### \_gap

Register new gap. if third parameter set to true registered gap will listed in iterable functions.

```scss
// Signature
@mixin _gap($name, $size, $is-iterable: true);
// Example
@include _gap("normal", 1em, true);
@include _gap("container", 1.5em, false);
```

#### \_unit

Register new unit. if third parameter set to true registered unit will listed in iterable functions.

```scss
// Signature
@mixin _unit($name, $size, $is-iterable: true);
// Example
@include _unit("half", 50%, true);
@include _unit("sidebar", 15em, false);
```

#### \_color

Register new color. if third parameter set to true registered color will listed in iterable functions.

```scss
// Signature
@mixin _color($name, $color, $is-iterable: false);
// Example
@include _color("primary", blue, true);
@include _color("violet", violet, false);
```

#### \_size

Register new size. if third parameter set to true registered size will listed in iterable functions.

```scss
// Signature
@mixin _size($name, $size, $is-iterable: true);
// Example
@include _size("huge", 3em, true);
@include _size("avatar", 2em, false);
```

### Read Variable

#### \_var

Get component variable. you can pass fallback value to return as default value if component variable not registered.

```scss
// Signature
@function _var($component, $property, $fallback: null);
// Example
border-color: _var("panel", "border", #a7a7a7);
```

#### \_gap

Get gap.

**Caution**: this function generate error if gap not found.

```scss
// Signature
@function _gap($name);
// Example
margin-bottom: _gap("element");
```

#### \_unit

Get unit.

**Caution**: this function generate error if unit not found.

```scss
// Signature
@function _unit($name);
// Example
width: _unit("avatar");
```

#### \_color

Get color.

**Caution**: this function generate error if color not found.

```scss
// Signature
@function _color($name);
// Example
border-color: _color("primary");
```

#### \_palette

Get palette for registered color.

```scss
// Signature
@function _palette($name, $variant: "500");
// Example
color: _palette("primary", "900");
```

#### \_size

Get size.

**Caution**: this function generate error if size not found.

```scss
// Signature
@function _size($name);
// Example
font-size: _size("huge");
```

#### \_breakpoint

Get breakpoint. see [Available Media Query](#available-media-query) for available breakpoint names. you can use predefined [mixins](#media-queries) if you don't want register media query manually.

**Caution**: this function generate error if breakpoint not found.

```scss
// Signature
@function _breakpoint($name);
// Example
@media #{_breakpoint("mobile")} {
  // Code
}
```

#### \_weight

Get font weight. see [Available Font Weight](#available-font-weight) for available weight names.

**Caution**: this function generate error if weight not found.

```scss
// Signature
@function _weight($name);
// Example
font-weight: _weight("bolder");
```

### Iterate Over Registered Variables

Iterators are helper functions to access registered variable (gaps, colors, etc) by loop.

By default only values set to iterable on register time will be returned by iterators! You can specific a list of non-iterable values to include in iteration and override default behaviors.

#### \_gaps

Get all iterable gaps.

```scss
// Signature
@function _gaps($contains: ());
// Example
@each $name, $gap in _gaps() {
  .has-#{$name}-padding {
    padding: $gap;
  }
}
@each $name, $gap in _gaps("element" "container") {
  // code
}
```

#### \_units

Get all iterable units.

```scss
// Signature
@function _units($contains: ());
// Example
@each $name, $unit in _units() {
  .has-#{$name}-size {
    width: $unit;
  }
}
@each $name, $unit in _units("avatar" "notification") {
  // code
}
```

#### \_colors

Get all iterable colors.

```scss
// Signature
@function _colors($contains: ());
// Example
@each $name, $color in _colors() {
  .has-#{$name}-color {
    color: $color;
  }
}
@each $name, $color in _colors("violet" "cold-blue") {
  // code
}
```

#### \_palettes

Get palette for all iterable colors.

```scss
// Signature
@function _palettes($variant: 500, $contains: ());
// Example
@each $name, $color in _palettes("900") {
  .has-#{$name}-color {
    color: $color;
  }
}
@each $name, $color in _palettes("300", "teal" "olive") {
  // code
}
```

#### \_sizes

Get all iterable sizes.

```scss
// Signature
@function _sizes($contains: ());
// Example
@each $name, $size in _sizes() {
  .has-#{$name}-size {
    font-size: $size;
  }
}
@each $name, $size in _sizes("header" "meta") {
  // code
}
```

#### \_breakpoints

Get breakpoints label and query.

```scss
// Signature
@function _breakpoints();
// Example
@each $device, $mq in _breakpoints() {
  @media #{$mq} {
    .is-#{$device}-red {
      color: red;
    }
  }
}
```

#### \_weights

get all font weights.

```scss
// Signature
@function _weights();
// Example
@each $name, $weight in _weights(){ {
  .has-#{$name}-weight {
    font-weight: $weight;
  }
}
```

## Predefined Variables

Predefined component variables:

| Component    | Variable      | Description                                                         | Value                                 |
| :----------- | :------------ | :------------------------------------------------------------------ | :------------------------------------ |
| `base`       | `direction`   | app flow direction                                                  | `ltr`                                 |
| `base`       | `line-height` | app line height (must defined in em)                                | `1.6em`                               |
| `base`       | `min-width`   | minimum viewport width                                              | `25em`                                |
| `radius`     | `normal`      | default border radius (used by all elements)                        | `3px`                                 |
| `radius`     | `rounded`     | rounded radius                                                      | `290486px`                            |
| `radius`     | `circle`      | circular radius                                                     | `50%`                                 |
| `font`       | `size`        | base font size                                                      | `12px`                                |
| `font`       | `family`      | font family                                                         | `'Segoe UI', Tahoma, Geneva, Verdana` |
| `scroll`     | `size`        | scroll size width                                                   | `8px`                                 |
| `decorator`  | `size`        | decorator size (decorator border width, spinner border width, etc.) | `2px`                                 |
| `spinner`    | `size`        | spinner width                                                       | `2rem`                                |
| `overlay`    | `filter`      | overlay filter                                                      | `blur(2px)`                           |
| `transition` | `duration`    | transitions duration                                                | `250ms`                               |
| `transition` | `ease`        | transitions easing function                                         | `ease`                                |

Predefined sizes:

| Name      | Value    |
| :-------- | :------- |
| `small`   | `0.85em` |
| `normal`  | `1em`    |
| `medium`  | `1.25em` |
| `large`   | `1.5em`  |
| `big`     | `2em`    |
| `huge`    | `2.5em`  |
| `massive` | `3em`    |

Predefined gaps:

Non-iterable gaps:

- **container**: default gap used by containers.
- **element**: default gap used by elements.

Iterable gaps:

| Name      | Value    |
| :-------- | :------- |
| `mini`    | `0.5em`  |
| `small`   | `0.85em` |
| `normal`  | `1em`    |
| `medium`  | `1.5em`  |
| `large`   | `2em`    |
| `huge`    | `2.5em`  |
| `massive` | `3em`    |

Predefined units:

| Name     | Value      |
| :------- | :--------- |
| `full`   | `100%`     |
| `half`   | `50%`      |
| `1-of-3` | `33.3333%` |
| `2-of-3` | `66.6666%` |
| `1-of-4` | `25%`      |
| `2-of-4` | `50%`      |
| `3-of-4` | `75%`      |
| `1-of-5` | `20%`      |
| `2-of-5` | `40%`      |
| `3-of-5` | `60%`      |
| `4-of-5` | `80%`      |
| `1-of-7` | `14.2857%` |
| `2-of-7` | `28.5714%` |
| `3-of-7` | `42.8571%` |
| `4-of-7` | `57.1428%` |
| `5-of-7` | `71.4285%` |
| `6-of-7` | `85.7142%` |

Predefined colors:

Main app palette (iterable):

| Name      | Description                   | Value     |
| :-------- | :---------------------------- | :-------- |
| `shade`   | used by all gray based colors | `#8d99ae` |
| `primary` | primary app color             | `#2196f3` |
| `error`   | used for error color          | `#cc0000` |
| `warning` | -                             | `#f5bc00` |
| `info`    | -                             | `#8236ec` |
| `success` | -                             | `#2dcd75` |

Predefined non-iterable colors:

| Name         | Description                                                    | Value                                                                         |
| :----------- | :------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `base`       | base color, used for background and color calculations         | `white`                                                                       |
| `container`  | container backgrounds                                          | `white`                                                                       |
| `input`      | input backgrounds                                              | `white`                                                                       |
| `section`    | alternative background color (stripped table, code, pre, etc.) | `_palette("shade", "50")`                                                     |
| `foreground` | default foreground                                             | `#081e30`                                                                     |
| `overlay`    | overlay background                                             | `rgba(white, 0.75)`                                                           |
| `separator`  | separator color                                                | `harmony(_color("base"), _palette("shade", "100"), _palette("shade", "800"))` |
| `mute`       | muted text color                                               | `harmony(_color("base"), _palette("shade", "300"), _palette("shade", "600"))` |

## Functions

### half-of

Calculate half of value.

```scss
// Signature
@function half-of($num);
```

### br

Calculate color brightness (between 0-1).

```scss
// Signature
@function br($color);
// Example
$brightness: br(#f44336); // 0.47712
$brightness: br(white); // 1
$brightness: br(black); // 0
```

### br-ratio

Calculate brightness ratio to base color (between 0-1).

```scss
// Signature
@function br-ratio($base, $color);
// Example
$ratio: br-ratio(white, #f44336); // 0.52288
$ratio: br-ratio(white, white); // 0
$ratio: br-ratio(white, black); // 1
```

### contrast

Compare colors for higher contrast to base color (this function use `br-ratio` to find color with bigger contrast).

```scss
// Signature
@function contrast($base, $color1, $color2);
// Example
$foreground: contrast(#f44336, white, black); // white
$foreground: contrast(white, white, black); // black
$foreground: contrast(black, white, black); // white
```

### harmony

Compare colors for lower contrast to base color (this function use `br-ratio` to find color with smaller contrast).

```scss
// Signature
@function harmony($base, $color1, $color2);
// Example
$border-color: harmony(#f44336, white, black); // black
$border-color: harmony(white, white, black); // white
$border-color: harmony(black, white, black); // black
```

### foreground

Get foreground for color (this function use contrast function with two color of semi-white and semi-black for foreground `contrast($color, mix(white, $color, 95%), mix(black, $color, 95%))`).

```scss
// Signature
@function foreground($color);
// Example
$foreground: foreground(#f44336); // #fef6f5
$foreground: foreground(white); // #0d0d0d
$foreground: foreground(black); // #f2f2f2
```

### readable

Return best readable version of color for a background. (ex: get a readable version for text of yellow color on white backrgound).

```scss
// Signature
@function readable($color, $background);
// Example
$color: readable("#2dcd75", white); // #25ab61
$color: readable("#2dcd75", black); // #68db9c
$color: readable("#f5bc00", white); // #d45700
$color: readable("#f5bc00", black); // #f7c626
```

### tint

Make color lighter.

```scss
// Signature
@function tint($color, $percentage);
// Example
$lighten: tint(#f44336, 10%); // #f5564a
```

### shade

Make color darker.

```scss
// Signature
@function shade($color, $percentage);
// Example
$lighten: shade(#f44336, 10%); // #e83d32
```

### palette

Generate palette of color.

**Note** palette variant must be one of `'50'`, `'100'`, `'200'`, `'300'`, `'400'`, `'500'`, `'600'`, `'700'`, `'800'` and `'900'`. `'50'` is lighten and `'900'` is darken version of color.

```scss
// Signature
@function palette($color, $variant: "500");
// Example
$lighten: get-palette(#f44336, "50"); // #fee8e7
$darken: get-palette(#f44336, "900"); // #98161b
```

### shadow

Generate normalized box shadow.

**Note**: set soft parameter to true for making soft shadow.

```scss
// Signature
@function shadow($x, $y, $color, $soft: false);
// Example
$shadow: shadow(0, 2px, #777777, $soft: false);
```

### e-pad

Generate common padding for element. (x/2) for vertical and x for horizontal padding.

```scss
// Signature
@function e-pad($padding);
// Example
padding: e-pad(1em); // padding: 0.5em 1em;
```

## Mixin

### clearfix

Generate a clearfix element (no child allowed for float around element).

```scss
.no-siblins {
  @include clearfix();
}
```

### locked

Make element non re-actable.

```scss
.disabled {
  @include locked();
}
```

### unify-parent

Generate unified parent selector.

```scss
@include unify-parent($child: .sidebar) {
  // Code
}
```

### control

Reset all styles of control.

```scss
button {
  @include control();
}
```

### scrollbar

Generate nice styled scrollbar (chrome only).

```scss
// Signature
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null);
// Example
.container {
  @include scrollbar(6px, gray, darkgray, red);
}
```

### spinner

Generate css spinner.

```scss
// Signature
@mixin spinner($size, $color, $width);
// Example
.loading {
  @include spinner(1.5em, red, 1px);
}
```

### overlay

Generate overlay on container.

```scss
// Signature
@mixin overlay($color);
// Example
.has-modal {
  @include overlay(white);
}
```

### Media Queries

Make a media quey selector. This mixins follow [Available Media Query](#available-media-query) names.

```scss
@include mobile() {
  // Code
}
@include until-widescreen() {
  // Code
}
```

## Helper Styles

Termeh contains following helper classes by default.

**Note**: you can combined helper classes with components (e.g. `a class="button is-rounded">...</a>`, `<img class="is-circular"/>`, `<span class="badge has-large-size">...</span>`, etc.).

- **is-ltr**: make element direction left to right.
- **is-rtl**: make element direction right to left.
- **is-margin-less**: remove all element margin.
- **is-padding-less**: remove all element padding.
- **is-radius-less**: remove all element border radius.
- **is-clipped**: hide element overflowed content.
- **is-locked**: make element non re-actable.
- **is-radiused**: add global normal border radius to element.
- **is-rounded**: make rounded border radius for element.
- **is-circular**: make circular border radius for element.
- **is-scrollable**: style element scrollbar (chrome only).
- **is-un-selectable**: make element content unselectable.
- **is-selectable**: make element content selectable (select element content on click).
- **is-italic**: set element font-style to italic.
- **is-underline**: set element text-decoration to underline.
- **is-undecorated**: set element text-decoration to none.
- **is-{size}-sized**: set font size to registered iterable sizes.
- **is-{weight}-weighted**: set font weight. see [Available Font Weight](#available-font-weight) for available weight names.
- **is-{align}-aligned**: set text align. available align is `left`, `right`, `center` and `justify`.
- **is-current-colored**: set text color to parent color. this class also apply color to svg fill.
- **is-{color}-colored**: set element color to registered iterable colors.
- **is-hidden**: set element display to none.
- **is-{device}-hidden**: set element display to none for device. see [Available Media Query](#available-media-query) for available device names.
- **is-{device}-only**: show element only for device. see [Available Media Query](#available-media-query) for available device names. this class not support `until` breakpoints (e.g. `is-until-desktop-only`).

## Components

For customize component you can override component variable before loading component file:

**Note**: for override components variable you must use component name and variable (`badge`, `button`, `card`, etc.).

```scss
@include _var("table", "sorted", #f2f2f2);
@include _var("badge", "colors", ("violet" "teal"));
@import "@bardoui/termeh/scss/component/badge.scss";
```

You can combine helper classes with components:

```html
<button class="is-rounded is-bold-weighted">I'm Round Bold</button>
<h1 class="is-margin-less">I'm A Header Without Margin</h1>
<img class="is-cirular" />
```

### Preloaded components

Preloaded styles imported with reset styles.

#### heading

style `<h1>`-`<h6>` tags.

by default following registered sizes used for heading font size.

**Note**: headers has _element_ gap for bottom margin by default.

| tag | used size |
| :-- | :-------- |
| h1  | huge      |
| h2  | big       |
| h3  | large     |
| h4  | medium    |
| h5  | normal    |
| h6  | small     |

#### input

Style input tags (input, select, textarea).

```html
<input type="text" class="input" />
```

- **is-{color}**: set input color to registered iterable colors.

| variable | description                                            | default |
| :------- | :----------------------------------------------------- | :------ |
| colors   | list of non-iterable colors to include in input colors | `()`    |

#### image

style img tags.

- **is-centered**: centered image in it's container.
- **is-{size}**: set image size to registered iterable sizes.

| variable | description                                          | default |
| :------- | :--------------------------------------------------- | :------ |
| sizes    | list of non-iterable sizes to include in image sizes | `()`    |

#### table

Style standard html tables.

**Note** for styling table you must follow standard table structure (use `<thead>`, `<tbody>` and `<tfoot>` containers).

```html
<table class="is-fluid is-stripped is-hoverable is-error">
  <thead>
    <tr>
      <th class="is-filler is-sortable">Company</th>
      <th class="is-sortable">Contact</th>
      <th class="is-sortable is-sorted is-desc">Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="is-filler">
        <div>Alfreds Futterkiste</div>
        <div class="meta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </td>
      <td>
        <div>Maria Anders</div>
        <div class="gaper">
          <div class="meta">Los Angeles</div>
          <div class="badge is-error is-rounded">LA</div>
          <div class="link is-error">Locate</div>
        </div>
      </td>
      <td class="is-sorted">Germany</td>
    </tr>
    <tr>
      <td class="is-filler">Ernst Handel</td>
      <td>Roland Mendel</td>
      <td class="is-sorted">Austria</td>
    </tr>
  </tbody>
</table>
```

- **is-fluid**: set table width to 100%.
- **is-stripped**: make table row stripped.
- **is-hoverable**: change `<tr>` background on hover.
- **is-{color}**: set table color to registered iterable colors (colorize sorted `<th>`).

Styling `<tr>`:

- **is-even**: colorize row as even row.
- **is-expandable**: hide next row (you can remove this class or add `is-expanded` class to show next row).

Styling `<th>`:

- **is-center-aligned**: set text align to center.
- **is-right-aligned**: set text align to right.
- **is-left-aligned**: set text align to left.
- **is-filler**: set column width to max available space (other column fit to content size).
- **is-sorted**: add sorted style to column.
- **is-sortable**: set pointer cursor to header.
- **is-asc**: add colorized top border to header.
- **is-desc**: add colorized bottom border to header.

Styling `<td>`:

- **is-center-aligned**: set text align to center.
- **is-right-aligned**: set text align to right.
- **is-left-aligned**: set text align to left.
- **is-filler**: set column width to max available space (other column fit to content size).
- **is-sorted**: add sorted style to column.

| variable | description                                            | default                                |
| :------- | :----------------------------------------------------- | :------------------------------------- |
| sorted   | sorted column background                               | `rgba(_palette("shade", "100"), 0.25)` |
| hover    | row hover background                                   | `rgba(_palette("shade", "100"), 0.5)`  |
| colors   | list of non-iterable colors to include in table colors | `()`                                   |

### Custom components

Following components included in termeh framework and not loaded by default. For using them you must import theme from `component` sub-directory.

```scss
@import "@bardoui/termeh/scss/component/gaper.scss";
@import "@bardoui/termeh/scss/component/badge.scss";
```

#### action

create a simple action link.

```html
<span class="action">Cancel</span>
<span class="action is-primary is-default">Approve</span>
```

- **is-default** style as default action.
- **is-disabled** style as disabled action.
- **is-{color}** colorize action by registered iterable colors.

| variable | description                                             | default |
| :------- | :------------------------------------------------------ | :------ |
| colors   | list of non-iterable colors to include in action colors | `()`    |

#### badge

```html
<span class="badge is-primary is-rounded is-ltr">25,000</span>
```

- **is-{color}** colorize badge by registered iterable colors.

| variable | description                                            | default |
| :------- | :----------------------------------------------------- | :------ |
| colors   | list of non-iterable colors to include in badge colors | `()`    |

#### button

By default styling `<input type="button">`, `<input type="submit">`, `<input type="reset">`, `<button>` and `.button` class.

```html
<a href="#back" class="button is-primary is-rounded is-simple">Cancel</a>
<input type="submit" class="is-success" value="Submit" />
```

- **is-simple**: make simple button.
- **is-disabled**: make button disabled.
- **is-{color}** colorize button by registered iterable colors.

| variable | description                                             | default |
| :------- | :------------------------------------------------------ | :------ |
| colors   | list of non-iterable colors to include in button colors | `()`    |

#### card

Nice styled card with section, separator, header, footer, thumbnail, overlay and loading support.

**Caution**: do not put content directly inside card. You must use section, separator and overlay child to put content inside card component.

```html
<div class="card is-decorated is-primary has-large-gap">
  <div class="section">
    <img src="thumbnail.jpg" />
  </div>
  <div class="section is-attached">
    <h1>Some heading with no gap</h1>
  </div>
  <div class="separator is-attached"></div>
  <div class="section is-secondary">section with darker color</div>
  <div class="overlay">
    <div>
      <h3>Greeting</h3>
      <p>content...</p>
    </div>
  </div>
</div>
```

- **is-decorated**: decorate card with bottom border.
- **is-loading**: add loading ui to card.
- **is-overlaid**: show overlay content.
- **is-{gap}-gaped**: set card gap (padding and section spacing) to registered iterable gaps.
- **is-{color}** colorize card by registered iterable colors.

Card contains three child types:

- **section**: make a card section.
  - **is-header**: remove top gap of section(`:first-child` attached to top by default).
  - **is-footer**: remove bottom gap of section(`:last-child` attached to bottom by default).
  - **is-attached**: remove section padding.
  - **is-secondary**: make a section with darker background (use global _section_ color).
- **separator**: make a separator line (use global _separator_ color).
  - **is-attached**: remove horizontal gap and attach separator to card sides.
- **overlay** make a overlay for card (with content and scrollable support).

| variable       | description                                           | default         |
| :------------- | :---------------------------------------------------- | :-------------- |
| border         | card border                                           | `none`          |
| shadow         | card box shadow                                       | a simple shadow |
| gaps           | list of non-iterable gaps to include in card gaps     | `()`            |
| colors         | list of non-iterable colors to include in card colors | `()`            |
| border-{color} | border for colored card                               | `null`          |
| shadow-{color} | box shadow for colored card                           | `null`          |

#### container

Container for centering your content horizontally on large screens.

Container width is `100%` for **tablet** and **mobile**, `960px` for **desktop** and `1200px` for **widescreen** and larger screen.

**Note** container has gap _container_ for bottom margin. If you want to remove this bottom margin use `is-marginless` helper class.

```html
<div class="container">
  <p>Content...</p>
</div>
```

- **is-fluid**: make container with 100% width.
- **is-{gap}-padded** set container padding to registered iterable gaps.

| variable | description                                                | default |
| :------- | :--------------------------------------------------------- | :------ |
| gaps     | list of non-iterable gaps to include in container paddings | `()`    |

#### content

Content wrapper with scrollbar and loading state.

```html
<div class="layout">
  <div class="my-sidebar">...</div>
  <div class="content is-overlaid">
    <p>...</p>
    <div class="overlay"></div>
  </div>
</div>
```

- **is-full**: make width and height 100% (useful when use out of flex container).
- **is-centered**: make content center aligned.
- **is-loading**: add loading ui to content.
- **is-overlaid**: show overlay content.
- **is-{device}-padding-less**: remove content padding for device.
- **is-{gap}-padded**: set content padding to registered iterable gap.
- **is-{device}-{gap}-padded**: set content padding to registered iterable gap for device.
- **is-{color}** colorize content by registered iterable colors (loader and scrollbar).

Content can contains `.overlay` child to show when card has `.is-overlaid` class.

| variable | description                                                | default |
| :------- | :--------------------------------------------------------- | :------ |
| gaps     | list of non-iterable gaps to include in container paddings | `()`    |
| colors   | list of non-iterable colors to include in content colors   | `()`    |

#### flex

Flex-box based grid system.

Item size is equal by default but you can register and use unit to add column size.

```html
<div class="flex is-mobile-stacked-reverse">
  <div class="flex-item"></div>
  <div class="flex-item"></div>
  <div class="break"></div>
  <div class="flex-item is-1-of-3 is-half-tablet"></div>
  <div class="flex-item"></div>
</div>
```

- **is-stacked**: make flex direction vertical.
- **is-{device}-stacked**: make flex direction vertical for device.
- **is-stacked-reverse**: make flex direction reverse-vertical.
- **is-{device}-stacked-reverse**: make flex direction reverse-vertical for device.
- **is-gap-less**: remove flex gaps.
- **is-{device}-gap-less**: remove flex gaps for device.
- **is-{gap}-gaped**: set flex gap to registered iterable gaps.
- **is-{device}-{gap}-gaped**: set flex gap to registered iterable gaps for device.
- **is-{align}-aligned** set flex align item (stretch, flex-start, flex-end, center, baseline).
- **is-{device}-{align}-aligned** set flex align item for device (stretch, flex-start, flex-end, center, baseline).
- **is-{justify}-justified** set flex justify content (flex-start, flex-end, center, space-between, space-around, space-evenly).
- **is-{device}-{justify}-justified** set flex justify content (flex-start, flex-end, center, space-between, space-around, space-evenly) for device.

Flex contains two child types:

- **flex-item**: make a column.
  - **is-fit**: set column size to content size.
  - **is-{device}-fit**: set column size to content size for device.
  - **is-{unit}**: set column size to registered iterable unit.
  - **is-{device}-{unit}**: set column size to registered iterable unit for device.
- **break**: end current row and start new row.

| variable | description                                         | default |
| :------- | :-------------------------------------------------- | :------ |
| units    | list of non-iterable units to include in flex sizes | `()`    |
| gaps     | list of non-iterable gaps to include in flex gaps   | `()`    |

#### gaper

Container for make gaps between elements.

Gaper is displayed as `inline-flex` by default.

**Note**: you can use `.gap` child inside gaper to make a long gap between items.

```html
<div class="gaper">
  <button>First</button>
  <a class="link">Second</a>
  <span class="badge is-primary is-rounded is-ltr">25,000</span>
</div>
```

- **is-fluid**: show gaper as block (flex).
- **is-{device}-fluid**: show gaper as block for device (flex).
- **is-stacked**: make gaper direction vertical.
- **is-{device}-stacked**: make gaper direction vertical for device.
- **is-stacked-reverse**: make gaper direction reverse-vertical.
- **is-{device}-stacked-reverse**: make gaper direction reverse-vertical for device.
- **is-gap-less**: remove gaper gap.
- **is-{device}-gap-less**: remove gaper gap for device.
- **is-{gap}-gaped**: set gaper gap to registered iterable gaps.
- **is-{device}-{gap}-gaped**: set gaper gap to registered iterable gaps for device.
- **is-{align}-aligned** set gaper align item (stretch, flex-start, flex-end, center, baseline).
- **is-{device}-{align}-aligned** set gaper align item for device (stretch, flex-start, flex-end, center, baseline).
- **is-{justify}-justified** set gaper justify content (flex-start, flex-end, center, space-between, space-around, space-evenly).
- **is-{device}-{justify}-justified** set gaper justify content (flex-start, flex-end, center, space-between, space-around, space-evenly) for device.

| variable | description                                        | default |
| :------- | :------------------------------------------------- | :------ |
| gaps     | list of non-iterable gaps to include in gaper gaps | `()`    |

#### header

Create a header container.

You must use `<h1>...<h6>` tag for header title. Title get size and color from header container.

```html
<span class="header is-right-decorated is-primary">
  <h1>Login</h1>
  <div class="gaper">
    <div class="meta">Today</div>
    <div class="gap"></div>
    <div class="meta is-action is-primary">Forget Password?</div>
  </div>
</span>
```

- **is-left-decorated** add decoration border to left of header.
- **is-right-decorated** add decoration border to right of header.
- **is-{gap}-padded** set header padding from registered iterable gaps.
- **is-{size}** set title size from registered iterable sizes.
- **is-{color}** colorize header by registered iterable colors.

| variable | description                                             | default |
| :------- | :------------------------------------------------------ | :------ |
| sizes    | list of non-iterable sizes to include in header sizes   | `()`    |
| paddings | list of non-iterable gaps to include in header paddings | `()`    |
| colors   | list of non-iterable colors to include in header colors | `()`    |

#### icon

Create a nice wrapper for icons (svg and img wrapper).

```html
<span class="icon is-action is-large is-primary">
  <svg>...</svg>
</span>
<span class="icon">
  <img src="icons/logo.png" />
</span>
```

- **is-action** make icon button (use _mute_ color for svg and grayscale img).
- **is-disabled** style as disabled icon.
- **is-{size}** set icon size from registered iterable sizes.
- **is-{color}** colorize icon by registered iterable colors (svg only).

| variable | description                                           | default |
| :------- | :---------------------------------------------------- | :------ |
| grayed   | action image grayscale filter amount                  | `0.5`   |
| sizes    | list of non-iterable sizes to include in icon sizes   | `()`    |
| colors   | list of non-iterable colors to include in icon colors | `()`    |

#### field

Create a wrapper for input and errors.

```html
<div class="field is-required is-failed">
  <label for="username">Username:</label>
  <input type="text" class="input" id="username" />
  <div class="errors">
    <p>Username is required</p>
  </div>
</div>
```

- **is-required** make element required (show **\*** after label).
- **is-failed** add error border to input and show errors block.

#### landscape

Make a scroll snap container (block lever gaper with scrolling).

```html
<div class="landscape is-normal-padded">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

- **is-stacked**: make landscape direction vertical.
- **is-{device}-stacked**: make landscape direction vertical for device.
- **is-is-mandatory**: set scroll snap type to mandatory.
- **is-gap-less**: remove landscape gap.
- **is-{device}-gap-less**: remove landscape gap for device.
- **is-{gap}-gaped**: set landscape gap to registered iterable gaps.
- **is-{device}-{gap}-gaped**: set landscape gap to registered iterable gaps for device.
- **is-center-snapped**: set snap align to center.
- **is-{device}-center-snapped**: set snap align to center for device.
- **is-end-snapped**: set snap align to end.
- **is-{device}-end-snapped**: set snap align to end for device.

| variable | description                                            | default |
| :------- | :----------------------------------------------------- | :------ |
| gaps     | list of non-iterable gaps to include in landscape gaps | `()`    |

#### layout

Nice mobile first flex based layout generator with nesting layout, centering and scrolling support.

Layout can have another nested layout as **direct** child.

Layout has vertical direction by default.

**Caution** you must use `.content` for content container.

```html
<div
  class="layout is-desktop-horizontal is-until-desktop-reverse is-padding-less"
>
  <div>Sidebar</div>
  <div class="layout is-massive-padded is-mobile-normal-padded is-centered">
    <div class="content">
      <div>
        <div class="card is-decorated">...</div>
      </div>
    </div>
  </div>
</div>
```

- **is-reverse**: set layout direction to reverse vertical.
- **is-{device}-reverse**: set layout direction to reverse vertical for device.
- **is-horizontal**: make layout direction horizontal.
- **is-{device}-horizontal**: make layout direction horizontal for device.
- **is-horizontal-reverse**: make layout direction reverse horizontal.
- **is-{device}-horizontal-reverse**: make layout direction reverse horizontal for device.
- **is-centered**: make `.content` child center aligned.
- **is-deactivated**: disable layout scrolling and add grayscale filter to ui.
- **is-padding-less**: remove content padding.
- **is-{device}-padding-less**: remove content padding for device.
- **is-{gap}-padded**: set content padding to registered iterable gap.
- **is-{device}-{gap}-padded**: set content padding to registered iterable gap for device.

| variable | description                                             | default |
| :------- | :------------------------------------------------------ | :------ |
| gaps     | list of non-iterable gaps to include in layout paddings | `()`    |

#### link

Generate nice animated link.

```html
<a class="link is-primary">Documentation</a>
```

- **is-{color}**: set link color to registered iterable colors.

| variable | description                                           | default |
| :------- | :---------------------------------------------------- | :------ |
| colors   | list of non-iterable colors to include in link colors | `()`    |

#### loader

Simple container for disable on loading state.

```html
<div class="loader is-loading">...</div>
```

- **is-loading**: enable loading state.
- **is-animated**: animate container opacity.

#### meta

Generate meta text (with muted color).

```html
<span class="meta is-ltr is-primary">10,000 Followers</span>
```

- **is-action**: make meta clickable.
- **is-{color}**: set meta color to registered iterable colors.

| variable | description                                           | default |
| :------- | :---------------------------------------------------- | :------ |
| colors   | list of non-iterable colors to include in meta colors | `()`    |
