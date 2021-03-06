# indentation

Specify indentation.

```css
   |@media print {
   |  a {
   | ↑  background-position: top left,
   | ↑ ↑  top right;
   | ↑}↑ ↑
   |}↑ ↑ ↑
/**  ↑ ↑ ↑
 * The indentation at these three points */
```

## Options

`int|"tab"`, where `int` is the number of spaces

### `2`

Always indent at-rules, rules, comments, declarations, and multi-line values by 2 spaces.

The following patterns are considered warnings:

```css
@media print {
a {
background-position: top left,
top right;
}
}
```

```css
@media print {
a {
  background-position: top left,
    top right;
  }
}
```

```css
@media print {
  a {
    background-position: top left,
    top right;
  }
}
```

```css
@media print {
  a,
    b {
    background-position: top left,
      top right;
  }
}
```

```css
a {
/* blergh */
  color: pink;
}
  /* blergh */
```

```css
@media print,
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi) {}
```

The following patterns are *not* considered warnings:

```css
@media print {
  a {
    background-position: top left,
      top right;
  }
}
```

```css
@media print {
  a,
  b {
    background-position: top left,
      top right;
  }
}
```

```css
a {
  /* blergh */
  color: pink;
}
/* blergh */
```

```css
@media print,
  (-webkit-min-device-pixel-ratio: 1.25),
  (min-resolution: 120dpi) {}
```

## Optional options

### `indentInsideParens: "once"|"twice"|"once-at-root-twice-in-block"`

By default, indentation within function arguments and other parentheses are ignored. If you would like to enforce indentation inside parentheses, use this option.

`"once"` means you expect one extra indentation (of your specified type) after newlines inside parentheses, and expect the closing parenthesis to have no extra indentation. For example:

```css
a {
  color: rgb(
    255,
    255,
    255
  );
  top: 0;
}
```

`"twice"` means you expect two extra indentations (of your specified type) after newlines inside parentheses, and expect the closing parenthesis to have one extra indentation. For example:

```css
a {
  color: rgb(
      255,
      255,
      255
    );
  top: 0;
}
```

`"once-at-root-twice-in-block"` means two things: You want the behavior of `"once"`, as documented above, when the parenthetical expression is part of a node that is an immediate descendent of the root — i.e. not inside a block. And you want the behavior of `"twice"`, as documented above, when the parenthetical expression is part of a node that is inside a block. For example, with a SCSS map:

```scss
$foo: (
  bar: 1,
  baz: 2
);

a {
  color: rgb(
      255,
      255,
      255
    );
  top: 0;
}
```

### `indentClosingBrace: true|false`

If `true`, the closing brace of a block (rule or at-rule) will be expected at the same indentation level as the block's inner nodes.

For example, with `indentClosingBrace: true`.

The following patterns are considered warnings:

```css
a {
  color: pink;
}
```

```css
@media print {
  a {
    color: pink;
  }  
}
```

The following patterns are *not* considered warnings:

```css
a {
  color: pink;
  }
```

```css
@media print {
  a {
    color: pink;
    }  
  }
```

### `except: ["block", "value", "param"]`

Do *not* indent for these things.

For example, with `2`:

The following patterns are considered warnings:

```css
@media print,
  (-webkit-min-device-pixel-ratio: 1.25),
  (min-resolution: 120dpi) {
  a {
    background-position: top left,
      top right;
  }
}
```

The following patterns are *not* considered warnings:

```css
@media print,
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi) {
a {
background-position: top left,
top right;
}
}
```

### `ignore: ["value", "param"]`

#### `"value"`

Ignore the indentation of values.

For example, with `2`:

The following patterns are *not* considered warnings:

```css
a {
  background-position: top left,
top right,
  bottom left,
    bottom right;
}
```

#### `"param"`

Ignore the indentation of at-rule params.

For example, with `2`:

The following patterns are *not* considered warnings:

```css
@media print,
  (-webkit-min-device-pixel-ratio: 1.25),
    (min-resolution: 120dpi) {
}
```
