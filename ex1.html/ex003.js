let num = [6,2,1,9,7,8,10]
/*
for(let pos = 0 ;pos < num.length ;pos++) {
    console.log(`a posicao do vector ${pos} e o numero e ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`a posicao ${pos} e vector e ${num[pos]}`)
}