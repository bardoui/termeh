# Variables

All variables registered and accessed by helper functions.

**Note:** defining variable by helper functions allow us to do more with registered variable instead of normal variable in sass (like iterating and default value).

## Set/Register Variables

**Note** third parameter determine that value is iterable or not. if a value defined as iterable it can iterate in loops through iterator helpers.

**Note** `set-theme` and `set-var` not iterable!

### Set Theme

Set base theme (`'dark'` or `'light'`). this variable effects color calculations.

```scss
@include set-theme("dark");
```

### Set Global Component Variable

Register variable for custom components or global functionality (like pre-defined vars). registering component variable with helper functions helps us for extendible and meaningful variable system!

```scss
@include set-var("sidebar", "background", "white");
```

### Register Global Gap (Iteration Support)

Gaps can used for element padding and margin.

```scss
@include set-gap("normal", 1rem, true);
@include set-gap("container", 1rem, false); // Special and not iterable
```

### Register Unit (Iteration Support)

Units can used for element size **(default grid system use unit sizes for column)**

```scss
@include set-unit("half", 50%, true);
@include set-unit("avatar", 2rem, false); // Special and not iterable
```

### Register Color (Iteration Support)

```scss
@include set-color("primary", blue, true);
@include set-color("my-special-color", teal, false); // Special and not iterable
```

### Register Font Size (Iteration Support)

used for element font size **(image and headings use font sizes for sizing)**

```scss
@include set-font-size("huge", 3rem, true);
@include set-font-size("root", 13px, false); // Special and not iterable
```

## Get Variables

### Determine If App Theme Is Light

```scss
$is-light: is-theme-light();
$is-dark: !is-theme-light();
```

### Get Component Variable

You can pass default value as third parameters and if variable not registered this function return this value.

```scss
.sidebar {
  background-color: get-var(
    "sidebar",
    "background",
    "white"
  ); // White is default value if no background property defined for sidebar component
}
```

### Get Gap

```scss
button {
  padding: get-gap("normal");
}
```

### Get Unit

```scss
img.avatar {
  width: get-unit("avatar");
}
```

### Get Color

```scss
h1 {
  color: get-color("heading");
}
```

### Get Palette Of Color

**Note** This function use `get-palette` function to get registered color palette version and all variation parameters is same as `get-palette`. you can read about this function in [Core](./CORE.md) docs.

```scss
.test-danger {
  color: palette("error", "900");
}
```

#### Get Font Size

```scss
h1 {
  font-size: get-font-size("huge");
}
```

#### Get Breakpoint

This function get default registered breakpoint size for responsive media query. valid values is: `'tablet'`, `'desktop'`, `'widescreen'`, `'fullhd'`

**Note** Instead of using media query you can use predefined mixin!

```scss
@media screen and (min-width: get-breakpoint("tablet")) {
  // ...
}
```

#### Get Font Weight

This function get default registered font weight. valid values is: `'lighter'`, `'light'`, `'normal'`, `'medium'`, `'semibold'`, `'bold'`, `'bolder'`

```scss
h1 {
  font-weight: get-font-weight("bolder");
}
```

## Iterate Variables

Iterators are helper functions to access registered variable (gaps, colors, etc) by loop.

**Note** By default only values set to iterable on register time will be returned by iterators! but you can specific a list of not iterable values to include in iteration and override default behaviors.

### Iterate Gaps

```scss
.container {
  @each $name, $size in iterate-gaps() {
    &.has-#{$name}-padding {
      padding: $size;
    }
  }

  // With add not iterable items
  @each $name, $size in iterate-gaps("element" "container") {
    &.has-#{$name}-padding {
      padding: $size;
    }
  }
}
```

### Iterate Units

```scss
.grid .column {
  @each $name, $size in iterate-units() {
    &.is-#{$name} {
      width: $size;
    }
  }

  // With add not iterable items
  @each $name, $size in iterate-units("media" "avatar") {
    &.is-#{$name} {
      width: $size;
    }
  }
}
```

### Iterate Colors

```scss
.button {
  @each $name, $color in iterate-colors() {
    &.is-#{$name} {
      background: $color;
      color: foreground($color);
    }
  }

  // With add not iterable items
  @each $name, $color in iterate-colors("teal") {
    &.is-#{$name} {
      background: $color;
      color: foreground($color);
    }
  }
}
```

### Iterate Palette

```scss
a {
  @each $name, $color in iterate-palette("900") {
    &.is-#{$name} {
      color: $color;
    }
  }

  // With add not iterable items
  @each $name, $color in iterate-palette("900", "teal" "olive") {
    &.is-#{$name} {
      color: $color;
    }
  }
}
```

### Iterate Font Sizes

```scss
.icon {
  @each $name, $size in iterate-font-sizes() {
    &.is-#{$name} {
      font-size: $size;
    }
  }

  // With add not iterable items
  @each $name, $size in iterate-font-sizes("root" "another") {
    &.is-#{$name} {
      font-size: $size;
    }
  }
}
```

### Iterate Font Weights

```scss
p {
  @each $name, $weight in iterate-font-weights() {
    &.is-#{$name} {
      font-weight: $weight;
    }
  }
}
```

## Links

- [Back to Home](../README.md)
- [Prev: Core Functions](./CORE.md)
- [Next: Predefined Variables](./PRE.md)
