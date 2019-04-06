const threads = require('threads')
const config = threads.config
const spawn = threads.spawn

config.set({
  basepath: {
    node: __dirname
  }
})

const thread = spawn('worker.js')

Sequence = function Sequence(string, number) {

  function print(string) {
    console.log(string + '\n')
  }

  function calculate(string, number) {
    number = number * Math.floor(Math.random()*10)
    thread
      .send({string: string, number: number})
      .on('message', response => {
        console.log('worker said: ' + response.string + ' & ' + response.number + '\n')
      })
      .on('done', () => {
        thread.kill()
      })
  }

  return {
    print: print,
    calculate: calculate
  }
}

let sequence = Sequence()

sequence.calculate('thread testing', 10)


