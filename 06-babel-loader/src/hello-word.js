function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello, world!')
        }, 2000)
    })
}

async function HelloWorld() {
    let string = await getString()
    console.log(string);
}

export default HelloWorld