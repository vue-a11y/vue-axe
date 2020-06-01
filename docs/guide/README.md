# Setup

## Installation

```shell
npm install -D axe-core vue-axe
# or
yarn add -D axe-core vue-axe
```

## Usage

Add to your `src/main.js`

```javascript
if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe)
}
```

### Nuxt.js

Create plugin file `plugins/axe.js`

```javascript
import Vue from 'vue'

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe)
}

```

In config file `nuxt.config.js`

```javascript
...
plugins: [
  { src: '~/plugins/axe.js', mode: 'client' }
]
```