function connectToWebsite(url) {
    const fetch = require('node-fetch');

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .catch(error => {
            console.error('Error connecting to the website:', error);
            throw error;
        });
}

module.exports = connectToWebsite;