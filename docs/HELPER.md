# Helpers

For using helper classes you must import them from `helper` directory. by default no helper imported in your app.

```scss
@import "@vbardo/termeh/scss/helper/color.scss";
@import "@vbardo/termeh/scss/helper/layout.scss";
@import "@vbardo/termeh/scss/helper/typography.scss";
@import "@vbardo/termeh/scss/helper/visibility.scss";
```

## Color

You can use `has-{color}-color` and `has-{color}-background` for changing foreground or background of element.

**Note:** Helpers color class only use iterable colors!

```html
<span class="has-primary-color">I Have Primary Color</span>
<span class="has-error-background">I Have Error Background</span>
```

## Layout

**is-ltr** Change direction to left-to-right

**is-rtl** Change direction to right-to-left

**is-clearfix** Make floated element clearfix

**is-clipped** Set element `overflow` to `hidden`

**is-scrollable** Make element scrollbar on y axis and override scrollbar ui.

**is-unselectable** Make element unselectable

**is-selectable** Make element content selectable on click.

**is-locked** Make element not re-actable

**is-radiusless** Remove element border radius

**is-rounded** Make element border radius round

**is-circular** Make element border radius circular

**is-left-floated** Float element to left

**is-right-floated** Float element to right

**is-marginless** Remove element margin

**is-paddingless** Remove element padding

### Responsive Displays

Responsive display can used by combining is-`$display`-`$device`.

**Note** If you not define device display apply for all devices by default!

**Note** Available display is `block`, `flex`, `inline`, `inline-block`, `inline-flex`

**Note** Available device is `mobile`, `tablet`, `tablet-only`, `until-desktop`, `desktop`, `desktop-only`, `until-widescreen`, `widescreen`, `widescreen-only`, `until-fullhd`, `fullhd`

```html
<div class="is-block">I Display as block for all device</div>
<div class="is-inline-block is-block-mobile">
  I Display as inline block for all device and display as block for mobiles
</div>
```

## Typography

**is-italic** Set font style of element to italic.

**is-underline** Set font decoration of element to underline.

**is-undecorated** Set font decoration of element to none.

**has-{font-size}-size** Set font size to registered font size class.

```html
<p class="has-huge-size">...</p>
```

**has-{font-size}-size-{device}** Set font size for device.

```html
<p class="has-huge-size-fullhd has-normal-size-until-tablet">...</p>
```

**is-{font-weight}-weight** Set font weight to registered font weight class.

**is-{text-align}-align** Set text align;

```html
<p class="is-center-align">...</p>
```

**is-{text-align}-align-{device}** Set text align for device.

```html
<p class="is-center-align-fullhd has-normal-align-until-tablet">...</p>
```

## Visibility

**is-hidden** Hide element for all devices.

**is-hidden-{device}** Hide element for `device` (mobile, tablet, until-desktop, etc).

**is-{device}-only** Show element for `device` (mobile, tablet, desktop, widescreen, fullhd) and hide on other devices.

## Links

- [Back to Home](../README.md)
- [Prev: Mixin](./MIXIN.md)
- [Next: Components](./COM.md)
