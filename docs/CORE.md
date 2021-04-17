# Core functions

This functions imported by default and you can use them anywhere.

## Contrast

### Get Color Brightness

Calculate color brightness (between 0-1)

```scss
$brightness: brightness(#f44336); // > 0.47712
$brightness: brightness(white); // > 1
$brightness: brightness(black); // > 0
```

### Get Brightness Ratio

Calculate brightness ratio to base color (between 0-1)

```scss
$ratio: brightness-ratio(white, #f44336); // > 0.52288
$ratio: brightness-ratio(white, white); // > 0
$ratio: brightness-ratio(white, black); // > 1
```

### Get Contrasted Color

Compare colors to higher contrast (this function use brightness-ratio to find color with bigger contrast)

```scss
$foreground: contrast(#f44336, white, black); // > white
$foreground: contrast(white, white, black); // > black
$foreground: contrast(black, white, black); // > white
```

### Get Inverse Contrasted Color

Compare colors to lower contrast (this function use brightness-ratio to find color with smaller contrast)

```scss
$border-color: contrast-invert(#f44336, white, black); // > black
$border-color: contrast-invert(white, white, black); // > white
$border-color: contrast-invert(black, white, black); // > black
```

### Get Foreground Color

Get foreground for color (this function use contrast function with tow color of semi-white and semi-black for foreground `contrast($color, mix(white, $color, 95%), mix(black, $color, 95%))`)

```scss
$foreground: foreground(#f44336); // > #fef6f5
$foreground: foreground(white); // > #0d0d0d
$foreground: foreground(black); // > #f2f2f2
```

### Get Readable Version Of Color

This function return best readable version of color for a background. (ex: get a readable version for text of yellow color on white backrgound)

```scss
h1 {
  color: readable("#2dcd75", white); // #25ab61
  color: readable("#2dcd75", black); // #68db9c
  color: readable("#f5bc00", white); // #d45700
  color: readable("#f5bc00", black); // #f7c626
}
```

## Palette

### Tint

Make color lighten

```scss
$lighten: tint(#f44336, 10%); // > #f5564a
```

### Shade

Make color darken

```scss
$lighten: shade(#f44336, 10%); // > #e83d32
```

### Get Palette For Color

**Note** Palette variant must be one of `'50'`, `'100'`, `'200'`, `'300'`, `'400'`, `'500'`, `'600'`, `'700'`, `'800'` and `'900'`. `'50'` is lighten and `'900'` is darken version of color.

```scss
$lighten: get-palette(#f44336, "50"); // > #fee8e7
$darken: get-palette(#f44336, "900"); // > #98161b
```

## Links

- [Back to Home](../README.md)
- [Next: Variable System](./VAR.md)
