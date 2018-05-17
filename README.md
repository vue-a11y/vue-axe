# vue-axe

Accessibility auditing for Vue.js applications (Inspired by [dequelabs/react-axe](https://github.com/dequelabs/react-axe))

## Install package
#### NPM
```shell
npm install -D vue-axe
```

#### Yarn
```shell
yarn add -D vue-axe
```
---

## Install plugin 
```javascript
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe, {
    config: {
      // ...
      rules: [
        { id: 'heading-order', enabled: true },
        { id: 'label-title-only', enabled: true },
        // and more
      ]
    }
  })
  Vue.config.productionTip = false
}
```

Optional: You can also pass settings through the second parameter at the time of installing the plugin, read about the object here:  
https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure

## Install in Nuxt.js
Create plugin file `plugins/axe.js`
```javascript
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe, {
    config: {
      // your configuration data
    }
  })
  Vue.config.productionTip = false
}

```

In config file `nuxt.config.js`
```javascript
...
plugins: [
  { src: '~/plugins/axe', ssr: false }
]
```

## Using with HTML files
#### CDN 
```html
<!-- Required Javascript -->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-axe"></script>
```

```javascript
Vue.use(VueAxe, {
  config: {
    // your configuration data
  }
})
```

## Run the demo
```shell
git clone https://github.com/vue-a11y/vue-axe.git vue-axe-demo
cd demo
npm install
npm run dev
```

It is a simple webpack template already installed and configured to run and check the logs in the browser console.  
After the commands just access the http://localhost:8080/


## Run the tests
```shell
git clone https://github.com/vue-a11y/vue-axe.git vue-axe
npm install
npm run test 
```

Or run Cypress on interactive mode
```shell
npm run test:open
```

## Contributing
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

If you want a faster communication, find me on [@ktquez](https://twitter.com/ktquez)
And follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**thank you**



