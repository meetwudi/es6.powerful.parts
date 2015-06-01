!function(window) {
  var list = document.createElement('ul');
  document.body.appendChild(list);

  window._output = function(message) {
    var item = document.createElement('li');
    item.innerHTML = message;
    list.appendChild(item);
  };
}(window);