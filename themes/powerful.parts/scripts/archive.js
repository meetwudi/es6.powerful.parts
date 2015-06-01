var pagination = require('hexo-pagination');
hexo.extend.generator.register('archive', function(locals){
  return pagination('index.html', locals.posts, {
    perPage: 1,
    layout: ['index'],
    data: {}
  });
});