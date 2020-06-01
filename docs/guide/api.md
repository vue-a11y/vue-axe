# API

The `$axe` is available on the property injected into the Vue instance, so it is available everywhere in your application.

## Run

To execute the `$axe.run` method to check manually your document or any desired HTMLElement.

### `$axe.run`

| Key           | Type                     | Default 
| ------------- | ------------------------ | ----------------------------------
| clearConsole  | Boolean                  | The same as `clearConsoleOnUpdate`
| element       | Document or HTMLElement  | `document`
| label         | Strong                   | `Run manually`

```js
methods: {
  axeRun() {
    this.$axe.run({
      clearConsole: true,
      element: this.$el,     // or document, document.querySelector('.selector'), ...
      label: 'Logo component'
    })
  }
}
```

## Plugins

Use the `$axe.plugins` method to have access to registered plugins.

::: tip
To see how to register your plugins [click here](/guide/options.html#plugins)
:::

### `$axe.plugins`

<br>

```js
methods: {
  handle () {
    this.$axe.plugins.myPlugin.run()
  }
}
```

::: tip
Learn more about [Axe docs: Plugins](https://github.com/dequelabs/axe-core/blob/master/doc/plugins.md)
:::

