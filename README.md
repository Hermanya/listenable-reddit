Reddit example for [listenable browser](https://github.com/hermanya/listenable-browser)
---------------------------------------------------------------------------------------

This repo is basically a clone of [redux async example](https://github.com/reactjs/redux/tree/master/examples/async). The only modification I made is I added a call to [listenable.js](./listenable.js) from (App.js's)[./containers/App.js] `render` method.

To be used outside the listenable browser, both `say` and `listenForUserInput` need to be [polyfilled](https://hermanya.github.io/listenable-browser/support_for_other_browsers.js) like so:

```html
<script src="https://hermanya.github.io/listenable-browser/support_for_other_browsers.js"></script>
```
