function parallelCallback(err, result) {
  console.log('received result for function', result);
  results.push(result);

  if (results.length === totalFuncs) {
    console.timeEnd('Parallel processing')
    console.log('Finished processing', results);    
  }
}

console.time('Parallel processing')
one()
two()
three()
four()

//this function takes 4 seconds to respond
function one() {
  setTimeout(function() {
    console.log('1');
  }, 4000)
}

//this function takes 3 seconds to respond
function one() {
  setTimeout(function() {
    console.log('1');
  }, 4000)
}

//this function takes 2 seconds to respond
function three(param, callback) {
  setTimeout(function() {
    callback(null, 3);
  }, 2000)
}

//this function takes 1 second to respond
function four(param, callback) {
  setTimeout(function() {
    callback(null, 4);
  }, 1000)
}