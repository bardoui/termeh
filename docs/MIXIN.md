# Mixin

This mixin imported by default and you can use them anywhere.

## Media Queries

```scss
// generate media query for mobile
@include mobile() {
  // Code
}

// generate media query for tablet and wider screen
@include tablet() {
  // Code
}

// generate media query for tablet only
@include tablet-only() {
  // Code
}

// generate media query for screen smaller than desktop
@include until-desktop() {
  // Code
}

// generate media query for desktop and wider screen
@include desktop() {
  // Code
}

// generate media query for desktop only
@include desktop-only() {
  // Code
}

// generate media query for screen smaller than widescreen
@include until-widescreen() {
  // Code
}

// generate media query for widescreen and wider screen
@include widescreen() {
  // Code
}

// generate media query for widescreen only
@include widescreen-only() {
  // Code
}

// generate media query for screen smaller than fullhd
@include until-fullhd() {
  // Code
}

// generate media query for fullhd and wider screen
@include fullhd() {
  // Code
}
```

## Layouts

```scss
// make block element clearfix floating
.some-div {
  @include clearfix();
}

// make element unselectable
.locked {
  @include unselectable();
}

// make element content selectable by click on it
.number {
  @include selectable();
}

// make element not re-actable
.is-disabled {
  @include locked();
}

// Reset style of control
button {
  @include control();
}

// generate unified parent selector
@include unify-parent($child: .sidebar) {
  // Code
}
```

## UI

```scss
/// Generate placeholder selector for input
@include placeholder() {
  color: palette("shade", "300");
}

/// Style scrollbar
@include scrollbar(
  $width: 6px,
  $track: get-color("gray"),
  $thumb: palette("gray", "600"),
  $thumb-hover: get-color("primary")
);

/// Create css loader
@include loader($size: 2rem, $color: palette("primary", "900"));

/// Create css overlay
.container {
  @include overlay($color: rgba(255, 255, 255, 0.5));
}

/// Create shadow
.box {
  @include shadow(0, 30px, #8a959e);
}
```

## Links

- [Back to Home](../README.md)
- [Prev: Predefined Variables](./PRE.md)
- [Next: Helpers](./HELPER.md)
