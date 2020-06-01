# Locales

It's possible easily through the settings, to define the language that will be used for the logs.

::: tip
axe-core already has several languages ​​available.   
[See axe-core locales](https://github.com/dequelabs/axe-core/tree/develop/locales)
:::

```js
import ptBR from 'axe-core/locales/pt_BR.json'

Vue.use(VueAxe, {
  config: {
    locale: ptBR
  }
})
```
