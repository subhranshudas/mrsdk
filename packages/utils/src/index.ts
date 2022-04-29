require('dotenv').config({ path: '../../.env' });
console.log("@mrsdk-utils: calling code from packages/utils: edited");

export const greet = () => {
    console.log(`Utils.greet() says Hi from ${process.env.BLOCKCHAIN_NETWORK} !`);
};