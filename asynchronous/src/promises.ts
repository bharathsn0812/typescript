
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, this is your data!";
            resolve(data);
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data); // "Hello, this is your data!"
}).catch(error => {
    console.error(error);
});
