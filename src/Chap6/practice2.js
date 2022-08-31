// @ts-check

// 1 byte = 8 bit는 0 이상 255 이사의 값 0~2^8-1
// LE : Little Endian
// BE : Big Endian

const buf = Buffer.from([20, 23, 1, 5])

/**
 * @param {*} array
 * @returns  {number}
 */

// function readInt32LE(array){

//   return {
//     array[0]+
//     array[1]*256+
//     array[2]*256**2+
//     array[3]*256**3
//   }
// }

const { log } = console

//log('our function: ', readInt32LE(buf))
log('orig function: ', buf.readInt32LE(0))
