import { env } from 'process';

env.foo = 'bar';
console.log(env.foo);

env.test = null;
console.log(env.test);
// => 'null'
env.test = undefined;
console.log(env.test);
// => 'undefined'

env.TEST = 1;
console.log(env.test);
