const add = (a,b) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(a<0 || b<0) {
                return reject('No must be positive')
            }
            resolve(a+b)
        }, 2000);
    })
}

const doWork = async() => {
   const sum = await add(3,97)
   const sum2 = await add(sum, 33)
   const sum3 = await add (sum2,25)
   return sum3
}

doWork().then((result) => {
console.log('Result', result)
}).catch((error) => {
    console.log('error',error)
})