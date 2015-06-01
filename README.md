# ES6 Powerful Parts

Learn ES6 by mind-blowing ES6 code showcases.

### Contribute

1. Fork this repository, checkout master branch
2. Create **[title].md** in **source/_posts**, where title should match `[a-z\-]+`.
3. Edit **[title].md** you just created following [Content Instructions](#Content Instructions).
4. Send in PR
5. All done! :)

### Content Instructions

We use [Hexo](http://hexo.io) to generate our website, therefore your markdown should conform to specific format.

```markdown
author: [Your name]
author_email: [Your email]
author_github: [Your GitHub handle]
description: [Short description of this showcase]
---

[Embeded pen iframe]
```

Embeded pen iframe is provided by [CodePen](http://codepen.io). Checkout [CodePen Blog](https://blog.codepen.io/documentation/features/embedded-pens/) for how to get embeded iframe for your showcase.

Here is an example of CodePen embeded iframe.

```html
<iframe height='154' scrolling='no' src='//codepen.io/tjwudi/embed/RPKqbq/?height=154&theme-id=15620&default-tab=js' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/tjwudi/pen/RPKqbq/'>RPKqbq</a> by John Wu (<a href='http://codepen.io/tjwudi'>@tjwudi</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
```

Keep an eye on the height of the iframe. Adjust the height of the iframe in CodePen Embed Builder to fit the content.

### External script

Since ES6 implementation is still actively processing in various browsers, you may need to add shim or polyfill in your pen. [Checkout this CodePen blog](https://blog.codepen.io/documentation/editor/adding-external-resources/) for how to add external scripts.

##### CodePen Helper Script

Since CodePen does not support displaying console output, we provide a script for you to simulate `console.log`.

Add `http://es6.powerful.parts/js/pen.js` as an external script in your pen, then you can use `_output(message)` to print message to the page.

Checkout [this example pen](http://codepen.io/tjwudi/pen/RPKqbq).
