document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use ES6

    try {
        const keyword = e.target.value.toLowerCase();

        const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=3');
        const json = await res.json();

        let filteredData = json.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(keyword);
            const emailMatch = item.email.toLowerCase().includes(keyword);
            const idMatch = item.id.toString().includes(keyword);
            return nameMatch || emailMatch || idMatch;
        });

        const resultsElement = document.getElementById('results');
        if (filteredData.length === 0) {
            resultsElement.innerHTML = '';
            return;
        }

        const result = filteredData.map(item => `<li><strong>Name:</strong> ${item.name}<br><strong>Email:</strong> ${item.email}<br><strong>Comment:</strong> ${item.body}</li>`).join('');
        resultsElement.innerHTML = result;
    } catch (error) {
        console.error('Error:', error.message);
    }
});

// ?Notes
// I used these things
// 1. npm install concurrently nodemon sass serve --save-dev
// 2. npm install node-php-server
// 3. use npm run dev to run 