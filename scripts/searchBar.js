document.addEventListener("DOMContentLoaded", function() {
    var searchBar = document.getElementById('duckSearch');

    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            search(searchBar.value)
        }
    });
    
    function search(searchString) {
        window.location.href = "https://duckduckgo.com/?q=" + searchString + "&ia=web";
    }
});
