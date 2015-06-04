author: John Wu
author_email: webmaster@leapoahead.com
author_github: tjwudi
description: With ES6 Proxy, elegant ORM Query implementation will be possible. We first created a proxy for `Customer.prototype`, which is an instance of `ORMBase`. Then we can trap calls to the `ORMBase`, and return corresponding query function. In this case, we simple return a query function in `find` which is binded to a context where `key` is configured.
---

<iframe height='400' scrolling='no' src='//codepen.io/tjwudi/embed/waJxqw/?height=707&theme-id=15620&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/tjwudi/pen/waJxqw/'>ES6 Powerful Parts - Negative index array using Proxy</a> by John Wu (<a href='http://codepen.io/tjwudi'>@tjwudi</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>