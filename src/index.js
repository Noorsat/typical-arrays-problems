exports.min = function min (array) {
    return Math.min.apply(Math,array);
  }
  
  exports.max = function max (array) {
    return Math.min.apply(Math,array);
  }
  
  exports.avg = function avg (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
  }
