const fs = require('fs/promises');
const { resolve } = require('path');

console.log("Starts");

setTimeout(() => {
  console.log("setTimeout Function is complete");
}, 0);

setImmediate(() => {
  console.log("setImmediate Function is complete");
});


const FS = fs.readFile('./Files/input.txt', 'utf-8');
FS.then(data => {
    console.log('Input Content: ', data);
}).catch(error => {
    console.log('Error: ', error);
}).finally(() => {
    console.log('File Read Operation is complete');
});


const promise = new Promise((resolve, reject) => {
    let success = false;

    if(success){
        resolve('Promise is resolved');
    } else{
        reject('Promise is rejected');
    }
});

promise.then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});


const cal = function(x, y){
    console.log('x: ', x , 'y: ', y);
    positiveSum().then((result) => {
        console.log('Sum = ', result);
    }).catch(error => {
        console.log(error);
        
    })
}

positiveSum = function(x,y){
    return new Promise((resolve, reject) => {
        if(x + y > 0){
            resolve(x + y);
        } else{
            reject('Sum is not positive');
        }
    });
}

console.log(cal(4, 9));
