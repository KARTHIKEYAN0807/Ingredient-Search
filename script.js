document.getElementById('searchButton').addEventListener('click', () => {
    const apiKey = 'ec2521fe8f9d4f31ac46627b11f2607c';
    const query = document.getElementById('query').value;
    const apiUrl = `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${query}&number=10`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayResults(ingredients) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    ingredients.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('card', 'mb-3', 'animate__animated', 'animate__fadeInUp');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'bg-light');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title', 'text-primary');
        cardTitle.textContent = ingredient.name;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerHTML = `ID: ${ingredient.id}<br>Image: <img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}" alt="${ingredient.name}" class="img-fluid">`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        ingredientDiv.appendChild(cardBody);
        resultsDiv.appendChild(ingredientDiv);
    });
}
