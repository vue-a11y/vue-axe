# vue-axe

Accessibility auditing for Vue.js applications by running [dequelabs/axe-core](https://github.com/dequelabs/axe-core/) validation on the page you're viewing, `axe-core` will run 1 second after the last VueJS update (with a 5 seconds debounce max wait). Package inspired by [dequelabs/react-axe](https://github.com/dequelabs/react-axe).

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
}
```
#### Configuration
|Key|Description|Default|Required|
|---|---|---|---|
|`clearConsoleOnUpdate`|Clears the console each time `vue-axe` runs|`true`|`false`|
|`customResultHandler`|Handle the results from an `axe.run()`. This may be needed for automated tests.|`undefined`|`false`|
|`config`|Provide your Axe-core configuration: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure| |`false`|
|`runOptions`|Provide your Axe-core runtime options: [API Name: axe.run](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter)|`{ reporter: 'v2', resultTypes: ['violations'] }`|`false`|

#### Custom Result Handler

The `customResultHandler` config property expects a callback like the `axe.run()` callback ([see documentation](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#parameters-axerun)). It will be triggered after each call to `axe.run()`. 

```javascript
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe, {
    customResultHandler: (error, results) => {
      results.violations.forEach(violation => console.log(violation))
    }
    // ...
  })
}
``` 

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
## See demo
https://vue-axe.surge.sh/

## Run the demo
```shell
git clone https://github.com/vue-a11y/vue-axe.git vue-axe-demo
cd vue-axe-demo/demo
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



