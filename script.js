document.addEventListener('DOMContentLoaded', () => {
    fetch('result.json')
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
                <h2>Row Count:</h2>
                <p>${data.row_count}</p>

                <h2>Region Count:</h2>
                <p>${data.regions}</p>

                <h2>Top 3 Products by Revenue:</h2>
                <ul>
                    ${data.top_n_products_by_revenue.map(product => `<li>${product.product}: $${product.revenue}</li>`).join('')}
                </ul>

                <h2>Rolling 7-Day Revenue by Region (Last Value):</h2>
                <ul>
                    ${Object.entries(data.rolling_7d_revenue_by_region).map(([region, revenue]) => `<li>${region}: $${revenue}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `<p>Error loading results: ${error}</p>`;
        });
});