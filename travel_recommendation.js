// Get references to the input field and the list where search results will be displayed
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Define your dataset (can be an array of strings, objects, etc.)
const dataset = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Pineapple',
  'Grapes',
  'Watermelon'
];

// Function to perform the search and display results
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
  const filteredResults = dataset.filter(item => item.toLowerCase().includes(searchTerm)); // Filter dataset based on search term
  
  // Clear previous search results
  searchResults.innerHTML = '';
  
  // Display search results
  filteredResults.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    searchResults.appendChild(li);
  });
}

// Event listener for input changes (e.g., typing)
searchInput.addEventListener('input', performSearch);
