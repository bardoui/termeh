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
// Core
@use "@bardoui/termeh/termeh.scss" as T;
@use "vars"; // local vars file
@use "@bardoui/termeh/styles.scss"; // global styles
@use "@bardoui/termeh/components/all.scss"; // global styles
// and your custom files
```

### Structure

You can use `all.scss` file inside sub-directory to import all directory content.

- termeh.scss _(core functions)_
- styles.scss _(base styles)_
- helpers
  - all.scss
  - attachment.scss
  - layout.scss
  - typography.scss
  - visibility.scss
- layout
  - all.scss
  - components.scss
  - container.scss
  - content.scss
  - gaper.scss
  - grid.scss
  - landscape.scss
  - layout.scss
- form
  - all.scss
  - checkbox.scss
  - field.scss
  - input.scss
  - select.scss
  - textarea.scss
- components
  - all.scss
  - badge.scss
  - button.scss
  - card.scss
  - header.scss
  - icon.scss
  - link.scss
  - meta.scss

## Core

```scss
// A11y

// get ratio for a11y contrast ratio
@function a11y-ratio($level: "AA", $size: 16, $base: 16, $bold: false);

// get nearest color for background
// $level: "AA" or "AAA"
@function a11y(
  $color,
  $background,
  $level: "AA",
  $size: 16,
  $base: 16,
  $bold: false
);

@function luminance($color);
@function darkest-of($color1, $color2);
@function brightest-of($color1, $color2);
@function contrast-ratio($foreground, $background);
@function tone($color);
@function contrast($base, $color1, $color2);
@function harmony($base, $color1, $color2);

@function palette-of($color, $variant);

@mixin define($component, $property, $value);
@mixin define-gap($name, $size, $iterable: true);
@mixin define-unit($name, $unit, $iterable: true);
@mixin define-color($name, $color, $iterable: true);
@mixin define-size($name, $size, $iterable: true);

@function var($component, $property, $fallback: null);
@function gap($name);
@function unit($name);
@function color($name);
@function palette($name, $variant: "500");
@function size($name);
@function breakpoint($device);
@function media-query($name);
@function font-weight($name);

@function gaps($includes: ());
@function units($includes: ());
@function colors($includes: ());
@function palettes($variant: 500, $includes: ());
@function sizes($includes: ());
@function breakpoints();
@function media-queries($includes: ());
@function font-weights($only: ());

@function negate($value);
@function shadow($x, $y, $color, $soft: false);
@function el-pad($padding);
@function transition-params();
@function foreground($color, $bold: false, $size: null);
@function darkest($color);
@function brightest($color);
@function readable($base, $color, $bold: false, $size: null);
@function muted($background, $color, $text: true);
@function disabled($color, $text: false);
@function state($background, $color);

@mixin unify-parent($child);
@mixin clearfix();
@mixin overflow-touch();
@mixin locked();
@mixin unselectable();
@mixin selectable();
@mixin reset();
@mixin control();
@mixin placeholder;
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null);
@mixin scrollable($color);
@mixin scroll-color($color);
@mixin spinner($size, $color, $width);
@mixin spinner-color($color);
@mixin loader($size, $color, $width);
@mixin loader-color($color);
@mixin overlay($color, $filter);
@mixin ltr();
@mixin rtl();
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
```

## Base

### Heading (`<h1>...<h6>`)

- **Modifiers**: `is-marginless`

### img (`<img>`)

- **Modifiers**: `is-centered`, `is-{size}`
- **Variables** _[image]_: `sizes`

### table (`<table>`)

- **Container**: `.table-container` scrollable table wrapper
- **Childs**: `.extra` extra content inside table to show/hide on `is-expanded` row
- **Modifiers** _[table]_: `is-fullwidth`, `is-stripped`, `is-hoverable`, `is-{color}`
- **Modifiers** _[tr]_: `is-even`, `is-expanded`
- **Modifiers** _[th]_: `is-center-aligned`, `is-right-aligned`, `is-left-aligned`, `is-filler`, `is-multiline`, `is-sorted`, `is-sortable`, `is-asc`, `is-desc`
- **Modifiers** _[td]_: `is-center-aligned`, `is-right-aligned`, `is-left-aligned`, `is-filler`, `is-multiline`, `is-sorted`
- **Variables** _[table]_: `sort-background`, `hover-background`, `colors`

## Helpers

- **attachment**: `is-attached`, `is-left-attached`, `is-left-top-attached`, `is-left-bottom-attached`, `is-right-attached`, `is-right-top-attached`, `is-right-bottom-attached`, `is-top-attached`, `is-top-left-attached`, `is-top-right-attached`, `is-bottom-attached`, `is-bottom-left-attached`, `is-bottom-right-attached`
- **layout**: `is-clearfix`, `is-ltr`, `is-rtl`, `is-clipped`, `is-radiusless`, `is-shadowless`, `is-clickable`, `is-unselectable`, `is-selectable`, `is-locked`, `is-scrollable`
- **typography**: `is-italic`, `is-underline`, `is-undecorated`, `is-capitalized`, `is-lowercase`, `is-uppercase`, `is-{size}-sized`, `is-{weight}-weighted`, `is-{align}-aligned`, `is-{color}-colored`
- **visibility**: `is-hidden`, `is-until-fullhd-hidden`, `is-until-widescreen-hidden`, `is-until-desktop-hidden`, `is-mobile-only`, `is-tablet-only`, `is-desktop-only`, `is-widescreen-only`, `is-fullhd-only`, `is-mobile-hidden`, `is-tablet-hidden`, `is-desktop-hidden`, `is-widescreen-hidden`, `is-fullhd-hidden`, `is-tablet-only-hidden`, `is-desktop-only-hidden`, `is-widescreen-only-hidden`, `is-touch-only`, `is-touch-hidden`

## Layout

### Components (`.components`)

- **Childs**: `filler`, `divider`
- **Modifiers**: `is-{align}-aligned`, `is-{justify}-justified`

### Container (`.container`)

- **Modifiers**: `is-marginless`, `is-fullwidth`, `is-paddingless`, `is-{gap}-padded`
- **Variables** _[container]_: `gaps`, `desktop`, `widescreen`

### Content (`.content`)

- **Childs**: `overlay`
- **Modifiers**: `is-centered`, `is-loading`, `is-overlaid`, `is-paddingless`, `is-{gap}-padded`, `is-{color}`
- **Variables** _[content]_: `gaps`, `colors`

### Gaper (`.gaper`)

- **Childs**: `filler`, `divider`, `gutter (manual only)`
- **Modifiers**: `is-auto`, `is-stacked`, `is-stacked-reverse`, `is-{align}-aligned`, `is-{justify}-justified`, `is-{gap}-gaped`, `is-{device}-stacked`, ``is-{device}-stacked-reverse`, `is-{device}-{align}-aligned`, `is-{device}-{justify}-justified`
- **Variables** _[gaper]_: `gaps`

### Grid (`.grid`)

- **Childs**: `break`, `column`
- **Modifiers** _[grid]_: `is-gapless`, `is-{gap}-gaped`, `is-{align}-aligned`, `is-{justify}-justified`, `is-{device}-{align}-aligned`, `is-{device}-{justify}-justified`
- **Modifiers** _[column]_: `is-fit`, `is-{unit}`, `is-{device}-fit`, `is-{device}-{unit}`
- **Variables** _[grid]_: `units`, `gaps`

### Landscape (`.landscape`)

- **Modifiers**: `is-center-snapped`, `is-end-snapped`, `is-mandatory`, `is-stacked`, `is-gapless`, `is-{gap}-gaped`, `is-{align}-aligned`, `is-{justify}-justified`, `is-{device}-stacked`, `is-{device}-{align}-aligned`, `is-{device}-{justify}-justified`

### Layout (`.layout`)

- **Childs**: `attachment`
- **Modifiers**: `is-reverse`, `is-horizontal`, `is-horizontal-reverse`, `is-{device}-reverse`, `is-{device}-horizontal`, `is-{device}-horizontal-reverse`

## Form

### Checkbox(`label.checkbox`, `label.radio`)

- **Childs**: `<input>`
- **Modifiers**: `is-{color}`, `is-disabled`
- **Variables** _[input]_: `colors`, `gaps`

### Field (`.field`)

- **Childs**: `<label>`, `help`, `error`
- **Modifiers**: `is-marginless`, `is-required`, `is-{gap}-padded`, `is-{color}`, `is-failed`
- **Variables** _[input]_: `colors`

### Input (`.input`)

- **Childs**: `divider`, `gutter`, `<input>`
- **Modifiers**: `is-failed`, `is-{gap}-padded`, `is-{color}`, `is-disabled`
- **Variables** _[input]_: `colors`, `gaps`

### Select (`<select>`)

- **Modifiers**: `is-focused`, `is-failed`, `is-{name}-padded`, `is-{color}`, `is-disabled`
- **Variables** _[input]_: `colors`, `gaps`

### Textarea (`<textarea>`)

- **Modifiers**: `is-focused`, `is-failed`, `is-{name}-padded`, `is-{color}`, `is-disabled`
- **Variables** _[input]_: `colors`, `gaps`

## Components

### Badge (`.badge`)

- **Modifiers**: `is-loading`, `is-light`, `is-rounded`, `is-{color}`
- **Variables** _[badge]_: `colors`

### Button (`.button`, `button`, `input[type=button|submit|reset]`)

- **Modifiers**: `is-simple`, `is-loading`, `is-rounded`, `is-{color}`, `is-disabled`
- **Variables** _[button]_: `colors`

### Card (`.card`)

- **Childs**: `separator`, `section`, `overlay`
- **Modifiers** _[card]_: `is-top-decorated`, `is-bottom-decorated`, `is-loading`, `is-overlaid`, `is-{gap}-padded`, `is-{color}`
- **Modifiers** _[separator]_: `is-attached`
- **Modifiers** _[section]_: `is-header`, `is-footer`, `is-attached`, `is-secondary`
- **Variables** _[card]_: `gaps`, `colors`, `border`, `shadow`, `border-{name}`, `shadow-{name}`

### Header (`.header`)

- **Childs**: `<h1>...<h6>`
- **Modifiers**: `is-marginless`, `is-left-decorated`, `is-right-decorated`, `is-{size}`, `is-{gap}-padded`, `is-{color}`
- **Variables** _[header]_: `sizes`, `gaps`, `colors`

### Icon (`.icon`)

- **Childs**: `<img>`, `<svg>`
- **Modifiers**: `is-outline`, `is-action`, `is-loading`, `is-{size}`, `is-{color}`, `is-disabled`
- **Variables** _[icon]_: `sizes`, `colors`, `action-filter`, `action-hover-filter`

### Link

- **Modifiers**: `is-{color}`
- **Variables** _[link]_: `colors`

### Meta (`.meta`)

- **Modifiers**: `is-action`, `is-{color}`
- **Variables** _[meta]_: `colors`
