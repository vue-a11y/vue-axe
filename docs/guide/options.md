# Options

## auto

| Type     | Default  |
| -------- | -------- |
| Boolean  | `true`   | 

If false disables automatic verification. Only checks with `$axe.run`


```js
Vue.use(VueAxe, {
  auto: false  // Disable auto check. 
})
```

::: tip
To check manually, use [$axe.run](/guide/api.html#run)
:::

## clearConsoleOnUpdate

| Type     | Default  |
| -------- | -------- |
| Boolean  | `false`  | 

If true, clean the console each time the component is updated.

```js
Vue.use(VueAxe, {
  clearConsoleOnUpdate: true  
})
```

## customResultHandler

| Type     | Default                  |
| -------- | ------------------------ |
| Function | `standardResultHandler`  | 

The `customResultHandler` config property expects a callback like the `axeCore.run()` callback ([see documentation](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#parameters-axerun)). It will be triggered after each call to `axeCore.run()`.

```js
Vue.use(VueAxe, {
  customResultHandler: (error, results) => {
    results.violations.forEach(violation => console.log(violation))
  }
})
```

## config

| Type     | Default                                  |
| -------- | ---------------------------------------- |
| Object   | `{ branding: { application: 'vue-axe' }` | 

To configure the format of the data used by axe. This can be used to add new rules, which must be registered with the library to execute.
Provide your 

::: tip
Learn more about [Axe-core configuration](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure)
:::

## runOptions

| Type     | Default                                                         |
| -------- | --------------------------------------------------------------- |
| Object   | `{ runOptions: { reporter: 'v2', resultTypes: ['violations'] }` | 

Flexible way to configure how `axeCore.run()` operates.

::: tip
Learn more about [Axe-core runtime options](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#options-parameter)
:::

## delay

| Type     | Default  |
| -------- | -------- |
| Number   | `0`      | 

Used only to delay the first check.

## style

| Type     |
| -------- |
| Object   | 

Customize style for console logs.

| key         | description                   |
| ----------- | ----------------------------- | 
| head        | Style title "New axe issues"  | 
| boldCourier | Font style                    | 
| critical    | Critical logs badge           | 
| serious     | Serious logs badge            | 
| moderate    | Moderate logs badge           | 
| minor       | Minor logs badge              | 
| title       | Issue title                   | 
| url         | Issue URL                     | 

::: tip
To see more about [default style](https://github.com/vue-a11y/vue-axe/blob/master/src/index.js#L22) 
:::

## plugins

| Type     |
| -------- |
| Array    | 

Register Axe plugins.

```js
import { myPlugin, myPlugin2 } from '@/plugins/axe'

Vue.use(VueAxe, {
  plugins: [myPlugin, myPlugin2]
})
```

::: tip
Learn more about [Axe docs: Plugins](https://github.com/dequelabs/axe-core/blob/master/doc/plugins.md)
:::
