
async function fetchDataAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, this is your async data!";
            resolve(data);
        }, 2000);
    });
}

async function displayData() {
    try {
        const data = await fetchDataAsync();
        console.log(data); // "Hello, this is your async data!"
    } catch (error) {
        console.error(error);
    }
}

displayData();
