// function soma3(a=1,b=1,c=1){
//     return a+b+b
// }

// console.log(soma3(), soma3(3), soma3(1), soma3(3,3,3))

function soma2(a,b){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    // c = inNaN(c)? 1 : c

    return a+b
}

console.log(soma2(), soma2(2,3))