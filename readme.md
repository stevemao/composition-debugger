# Problem

```js
var dasherize = compose(join('-'), toLower, split(' '), replace(/\s{2,}/ig, ' '));

dasherize('The world is a vampire');
// TypeError: Cannot read property 'apply' of undefined
```

What arguments is `toLower` called with?
What does `split(' ')` return?

# Let's `debugger`

```js
// index.js
const cdebugger = require('composition-debugger');

var dasherize = compose(join('-'), toLower, cdebugger, split(' '), replace(/\s{2,}/ig, ' '));
// nodejs will pause after `split(' ')`

dasherize('The world is a vampire');
```

```
node inspect index.js
```

# Alternatives

- [treis](https://github.com/raine/treis)
- [`tap`](http://ramdajs.com/docs/#tap)
- [`do`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/do.md)
- [composition-trace](https://github.com/stevemao/composition-trace)

# Related

- [inspect-curry](https://github.com/stevemao/inspect-curry)
- [inspect-compose](https://github.com/stevemao/inspect-compose)
