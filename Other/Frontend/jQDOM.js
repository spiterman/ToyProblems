function $(domElement){
  // console.log(Array.prototype.slice.call(arguments));

  var html = document.getElementsByClassName(domElement);
  return html;
}

$.prototype.onClick = function(cb){
  cb();
};

console.log($('test'));



