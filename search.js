
// Basic main function, first to be called
function searchWords() {
    markWords();
}

//Gets the words that match some query
function getRegEx() {
    // Getting regex query from HTML page
    var query = document.getElementById("regexfield").value;
    
    // Returns an array containing the words found with the query
    return new RegExp(query).exec;
}

// Marks all the words on the page that match query
function markWords() {
    // Gets the mathcing words for processing
    var words = getRegEx();
    
    // More logic to come
}
