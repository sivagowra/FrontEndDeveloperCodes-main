const API_URL = "https://api.github.com/users/sivagowra";

async function handlePromise() {
    try {
        const response = await fetch(API_URL); // Use a descriptive name like 'response'
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonValue = await response.json(); // Properly parse the JSON
        console.log(jsonValue);
    } catch (error) {
        console.error("Error fetching data:", error); // Catch and log any errors
    }
}

handlePromise();
