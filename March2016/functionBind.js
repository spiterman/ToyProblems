
var bind = function(func, context){
  //Your code here
//var that = func;
funContext = Array.prototype.slice.call(arguments, 1);

for(var i = 0; i < funContext.length; i++){
  if (!funContext[i]){
    funContext.splice(i, 1);
  }
}

return function(){
  return func.apply(context,
  funContext.concat(Array.prototype.slice.call(arguments)))
}

};




Function.prototype.bind = function(oThis) {

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                                 ? this
                                 : oThis,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;

};


var bind = function(func, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var args1 = Array.prototype.slice.call(arguments);
    return func.apply(context, args.concat(args1));
  };
};


Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var that = this;
  return function() {
    var args1 = Array.prototype.slice.call(arguments);
    return that.apply(context, args.concat(args1));
  };
};
