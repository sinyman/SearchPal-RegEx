
// Basic main function, first to be called
function searchWords() {
    markWords();
}

//Gets the query
function getQuery() {
    // Return regex query from HTML page
    return document.getElementById("regexfield").value;
}

// Marks all the words on the page that match query
function markWords() {
    // Gets the mathcing words for processing
	var query = getQuery();
    
	// Get page source code
	var html = document.body.innerHTML();

	RegExp re = new RegExp(query);

	// More code to come
}
