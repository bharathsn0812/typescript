
async function fetchUserData(url: string): Promise<void> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
fetchUserData(apiUrl);
