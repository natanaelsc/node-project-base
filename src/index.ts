import { add } from '@math/add';
import 'dotenv/config';

console.log('Hello World!');

console.log(add(1, 999));

console.log('env:', String(process.env.HELLO));
