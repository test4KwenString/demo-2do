
//-------------最小化jquery--------------------
//使用 document.querySelectorAll
$ = (function (document, window, $) {
  var node = Node.prototype,
      nodeList = NodeList.prototype,
      forEach = 'forEach',
      each = [][forEach],
      dummy = document.createElement('i');

  nodeList[forEach] = each;

  //-------------on(event, fn)---------------
  window.on = node.on = function (event, fn) {
    this.addEventListener(event, fn, false);
    return this;
  };
  nodeList.on = function (event, fn) {
    this[forEach](function (el) {
      el.on(event, fn);
    });
    return this;
  };

  //-------------remove and add class--------
  window.removeClass = node.removeClass = function(oldClassName) {
       this.classList.remove(oldClassName);
       return this;
  };
  nodeList.removeClass = function(oldClassName) {
      this[forEach](function(el) {
          el.removeClass(oldClassName);
      });
      return this;
  };
  node.add = function(newClassName) {
       this.classList.add(newClassName);
       return this;
  };
  nodeList.add = function(newClassName) {
      this[forEach](function(el) {
          el.add(newClassName);
      });
      return this;
  };


  $ = function (s) {
    var r = document.querySelectorAll(s || '@'),
        length = r.length;
    return length == 1 ? r[0] : r;
  };

  $.on = node.on.bind(dummy);
  $.add = node.add.bind(dummy);

  return $;
})(document, this);

