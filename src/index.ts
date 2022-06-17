import { add } from '@math/add';
import 'dotenv/config';

const hello: string = 'Hello World!';

console.log(hello);

console.log(add(1, 999));

console.log('env:', String(process.env.HELLO));
