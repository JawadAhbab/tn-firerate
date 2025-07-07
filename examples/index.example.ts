import { Timeout } from '../src/index'
const timeout = new Timeout(3000)
timeout.queue(() => console.log('Times up!'))

console.log(timeout)
