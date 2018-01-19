const waitTime = new Promise((res, rej) => {
    setTimeout(() => {
        res("despues de 5 segundos"); 
    }, 5000);
});

module.exports = {
    message: "CryptoCoins",
    asyncMessage: async() => {
        const message = await waitTime;
        console.log(message)
    }
}