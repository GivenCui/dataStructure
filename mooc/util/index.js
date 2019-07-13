/**
 * @param {Function} fun 多项式的项数
 * @param {String} funName
 * @return {Function} 调用需要()
 */
var getFunExecTime = (function() {
   
  // 装饰器，在当前函数执行前先执行另一个函数
  function decoratorBefore(fn, beforeFn) {
    return function() {
      var ret = beforeFn.apply(this, arguments);
 
      // 在前一个函数中判断，不需要执行当前函数
      if (ret !== false) {
        fn.apply(this, arguments);
      }
    };
  }
 
  // 装饰器，在当前函数执行后执行另一个函数
  function decoratorAfter(fn, afterFn) {
    return function() {
      fn.apply(this, arguments);
      afterFn.apply(this, arguments);
    };
  }
   
  // 执行次数
  var funTimes = {};
   
  // 给fun添加装饰器，fun执行前后计时
  return function(fun, funName) {
    return decoratorAfter(decoratorBefore(fun, function() {
      // 执行前
      console.time(funName);
    }), function() {
      // 执行后
      console.timeEnd(funName);
    });
  }
})();

 export default {
  getFunExecTime
 }
