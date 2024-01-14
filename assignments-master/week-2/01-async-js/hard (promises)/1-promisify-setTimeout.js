/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    let mypromise = new Promise(setTimeout(function(resolves,reject)
    {
        return mypromise

    }), n)
}

module.exports = wait;


// cd 01-js
// ```npm install --save-dev jest```
// ```npm install```
// to run test case : ```npx jest ./tests/filename```