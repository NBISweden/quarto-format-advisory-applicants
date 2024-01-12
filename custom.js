
// https://www.w3schools.com/howto/howto_js_filter_lists.asp
function filter_list() {
    // Declare variables
    var input, applicants, rArea, i;
    input = document.getElementById('ra_filter');
    // filter = input.value.toUpperCase();
    applicants = document.getElementById("applicants");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < applicants.length; i++) {
        rArea = applicants[i].getElementsByTagName("ul")[2].textContent
        if (rArea.indexOf(input.value) > -1) {
            applicants[i].style.display = "";
        } else {
            applicants[i].style.display = "none";
        }
    }
}
