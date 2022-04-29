require('dotenv').config({ path: '../../.env' });
console.log("@mrsdk-utils: calling code from packages/utils");

export const greet = () => {
    console.log(`Utils.greet() says Que Paso! from ${process.env.BLOCKCHAIN_NETWORK} !`);
};