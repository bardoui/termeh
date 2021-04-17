# Predefined Global Variables

This variable registered and used by default but you can override them.

```scss
// Theme: default theme is light
@include set-theme("light");

// Vars
@include set-var(
  "base",
  "direction",
  ltr
); // default ui direction (use for root and all element by default)
@include set-var(
  "base",
  "line-height",
  1.6
); // default ui line height (use for root and all element by default)

@include set-var(
  "font",
  "size",
  12px
); // default font size (use for root and all element by default)
@include set-var(
  "font",
  "family",
  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
); // default font family (use for root and all element by default)

@include set-var("radius", "normal", 2px); // default element border radius
@include set-var(
  "radius",
  "rounded",
  290486px
); // border radius used by rounded element
@include set-var(
  "radius",
  "circle",
  50%
); // border radius used by circular element

@include set-var(
  "transition",
  "duration",
  150ms
); // default duration for transitions

// Gaps
@include set-gap(
  "container",
  1.5rem,
  false
); // default gap used by containers (grid, container, paragraph, etc...)
@include set-gap(
  "element",
  1rem,
  false
); // default  gap used by elements (input, button, etc...)
@include set-gap("mini", 0.5em, true);
@include set-gap("small", 0.75em, true);
@include set-gap("normal", 1em, true); // Used for default padding in container
@include set-gap("medium", 1.5em, true);
@include set-gap("large", 2em, true);
@include set-gap("huge", 2.5em, true);
@include set-gap("massive", 3em, true);

// Units: By default used by grid columns
@include set-unit("full", 100%, true);
@include set-unit("half", 50%, true);
@include set-unit("1-of-3", 33.3333%, true);
@include set-unit("2-of-3", 66.6666%, true);
@include set-unit("1-of-4", 25%, true);
@include set-unit("2-of-4", 50%, true);
@include set-unit("3-of-4", 75%, true);
@include set-unit("1-of-5", 20%, true);
@include set-unit("2-of-5", 40%, true);
@include set-unit("3-of-5", 60%, true);
@include set-unit("4-of-5", 80%, true);
@include set-unit("1-of-7", 14.2857%, true);
@include set-unit("2-of-7", 28.5714%, true);
@include set-unit("3-of-7", 42.8571%, true);
@include set-unit("4-of-7", 57.1428%, true);
@include set-unit("5-of-7", 71.4285%, true);
@include set-unit("6-of-7", 85.7142%, true);

// Color

// Iterable colors
@include set-color("shade", #9f9f9f, true); // Use for gray scale colors
@include set-color(
  "primary",
  #2196f3,
  true
); // app primary color by default used by <a> and ::selection
@include set-color("error", #cc0000, true);
@include set-color("warning", #f5bc00, true);
@include set-color("info", #8236ec, true);
@include set-color("success", #2dcd75, true);

// Not iterable colors
@include set-color(
  "background",
  white,
  false
); // default background (used by body tag)
@include set-color(
  "foreground",
  palette("shade", "900"),
  false
); // default app foreground
@include set-color(
  "background-alt",
  palette("primary", "50"),
  false
); // used by code and pre tags by default
@include set-color(
  "separator",
  contrast-invert(
    get-color("background"),
    palette("shade", "200"),
    palette("shade", "700")
  ),
  false
); // used for separator lines (default used by hr, input, select and textarea)
@include set-color("container", white, false); // default container background
@include set-color("input", white, false); // default input background

// Font sizes: used by heading and img
@include set-font-size("mini", 0.5em, true);
@include set-font-size("small", 0.75em, true);
@include set-font-size("normal", 1em, true);
@include set-font-size("medium", 1.25em, true);
@include set-font-size("large", 1.5em, true);
@include set-font-size("big", 2em, true);
@include set-font-size("huge", 2.5em, true);
@include set-font-size("massive", 3em, true);
```

## Links

- [Back to Home](../README.md)
- [Prev: Variable System](./VAR.md)
- [Next: Mixin](./MIXIN.md)
