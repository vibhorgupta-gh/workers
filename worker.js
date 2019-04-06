
module.exports = function (input, done) {

  function logger(string) {
    console.log('Logger says: ' + input.string + '\n')
  }

  let prod = 1;
  for(var i = 1; i <= input.number; i++) {
      prod = prod*i;
  }

  logger(input.string)
  done({string: input.string, number: prod})
}
