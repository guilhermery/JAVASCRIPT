function fatorial(n){
    for(let i = n-1; i > 0; i--) {
        n = n*i
    }
    return n
}

let f = fatorial(5)
console.log(f)