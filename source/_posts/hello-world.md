author: John Wu
email: webmaster@leapoahead.com
---

```js
$.ajax('http://localhost/posts')
  .then((post) => generate(post))
  .fail((err) => log(err));
```

Arrow function is very powerful! It is not only a syntax sugar for function, but also binds current context to the function automatically.