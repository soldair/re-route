# re-route
generate regex to match urls with place holder strings. /url/:hi/:foo

## generates a regex from a url string. for \/\/\/\/\ sanity

```js
 var re = require('./')
 var matches = '/a/123/---'.match(compile('/a/:b/:c'))
 console.log(matches)
```
 would log this.

```js
 [ '/a/123/---', '123', '---', index: 0, input: '/a/123/---' ]
```

