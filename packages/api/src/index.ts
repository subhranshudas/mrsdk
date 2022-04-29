require('dotenv').config({ path: '../../.env' });
import * as Utils from '@dasubh/mrsdk-utils';

console.log("@mrsdk-api: calling code from packages/api");

const flag = process.env.BLOCKCHAIN_NETWORK === 'KOVAN' ? 'you get free ETH' : 'you have to pay!';
console.log(`Ok so now..., ${flag}`);

Utils.greet();