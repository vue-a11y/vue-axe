# vue-axe

Accessibility auditing for Vue.js applications by running [dequelabs/axe-core](https://github.com/dequelabs/axe-core/) validation on the page you're viewing, `axe-core` will run 1 second after the last VueJS update (with a 5 seconds debounce max wait). Package inspired by [dequelabs/react-axe](https://github.com/dequelabs/react-axe).

## Install package
#### NPM
```shell
npm install -D axe-core vue-axe
```

#### Yarn
```shell
yarn add -D axe-core vue-axe
```
---

## Install plugin 
```javascript
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe)
}
```
## Configuration
| Key                    | Type     | Description                                                   | Default    
| ---------------------- | -------- |-------------------------------------------------------------- | -----------
| `clearConsoleOnUpdate` | Boolean  | Clears the console each time `vue-axe` runs                   | `false`    
| `customResultHandler`  | Function | Handle the results. (This may be needed for automated tests)
| `config`               | Object   | Provide your [Axe-core configuration](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure)  | [See default config](https://github.com/vue-a11y/vue-axe/blob/master/src/index.js#L13) 
| `runOptions`           | Object   | Provide your [Axe-core runtime options](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter) | [See default runOption](https://github.com/vue-a11y/vue-axe/blob/master/src/index.js#L18) 
| `delay`                | Number   | Used to delay the first check. - `Millisecond`
| `style`                | Object   | Customize style for console logs. | [See default style](https://github.com/vue-a11y/vue-axe/blob/master/src/index.js#L22) 
| `plugins`              | Array    | Register Axe plugins. [Axe docs: Plugins](https://github.com/dequelabs/axe-core/blob/master/doc/plugins.md)

### Custom Result Handler

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

### Run axe manually
The `$axe` is available on the property injected into the Vue instance, so it is available everywhere in your application. With it it is possible to execute the `$axe.run` method to check manually your document or any desired HTMLElement.

#### `$axe.run({ clearConsole: Boolean, element: Document | HTMLElement })`

```vue
<script>
//...
  methods: {
    axeRun() {
      this.$axe.run({
        clearConsole: false,
        element: this.$el     // e.g. document, document.querySelector('.selector'), ...
      })
    }
  }
</script>
```

### Running custom axe plugins
Learn more about [axe plugin](https://github.com/dequelabs/axe-core/blob/master/doc/plugins.md)

```vue
<script>
//...
  methods: {
    handle () {
      this.$axe.plugins.myPlugin.run()
    }
  }
</script>
```

## Install in Nuxt.js
Create plugin file `plugins/axe.js`
```javascript
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
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

## Using with HTML files
#### CDN 
```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-axe"></script>
```

```javascript
Vue.use(VueAxe)
```
## See demo
https://vue-axe.surge.sh/

## Run the demo
```shell
git clone https://github.com/vue-a11y/vue-axe.git vue-axe
cd vue-axe/demo
npm install
npm run dev
```

It is a simple webpack template already installed and configured to run and check the logs in the browser console.  
After the commands just access the http://localhost:8080/


## Run the tests
```shell
git clone https://github.com/vue-a11y/vue-axe.git vue-axe
cd vue-axe
npm install
npm run test 
```

Or run Cypress on interactive mode
```shell
npm run test:open
```

## Contributing
- From typos in documentation to coding new features;
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

Follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**thank you**



