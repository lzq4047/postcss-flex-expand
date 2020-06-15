# postcss-flex-expland

> resolve [flexibility](https://github.com/jonathantneal/flexibility) cannot calculate `flex: 1;`

Postcss plugin that explands flex to flex-grow,flex-shrink,flex-basis.


## Install

```bash
# use npm
npm install --save-dev postcss-flex-expand
```

or

```bash
# use yarn
yarn add --save-dev postcss-flex-expand
```

## Usage

```js
const postcss = require('postcss');
const flexExpand = require('postcss-flex-expand');

postcss([
    flexExpand()
])
```

```css
/* before */
.flex-item {
    flex: 1;
}

/* after */
.flex-item {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    flex: 1;
}
```