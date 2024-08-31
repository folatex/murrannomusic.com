document.getElementById('sot').addEventListener('click', function() {
    var dropSort = document.querySelector('.drop-sort');
    dropSort.classList.toggle('visible');
  });
 // Get the search input and button elements
const searchInput = document.getElementById('seech');
const searchButton = document.getElementById('maa');
const searchResults = document.getElementById('container');

// Add event listener to search button
searchButton.addEventListener('click', () => {
  // Get the search input value
  const searchValue = searchInput.value.trim();

  // Filter the list items based on the search input
  const listItems = searchResults.children;
  for (const listItem of listItems) {
    if (listItem.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
      listItem.style.display = 'block';
    } else {
      listItem.style.display = 'none';
    }
  }
});