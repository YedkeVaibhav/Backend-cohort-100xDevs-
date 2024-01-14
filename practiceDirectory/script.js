function arithmetic(a,b,cal)
{
    let ans = cal(a,b)
    return ans
}

function sum(a,b)
{
    return a+b;
}

setInterval( ()=> {
   console.log("set timeout has been executed")
}, 3000)
let ans = arithmetic(10,200,sub)


function sub(a,b)
{
    return a - b;
}

console.log(ans)