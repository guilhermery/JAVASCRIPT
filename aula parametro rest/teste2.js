function soma(n1, n2){
    return n1+n2;
}

console.log(soma(10,5))

function somanovo(...valores){
    let res = 0
    for(let i of valores){
        res = res + i;
    }
    return res
}

console.log(somanovo(10, 5, 12, 15, 9))