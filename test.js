const tap = require('tap')
const cdebugger = require('./')

const foo = () => 'foo'

tap.equal(cdebugger(foo()), 'foo')
