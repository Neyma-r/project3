var countDate = new Date("Jan 1, 2025 00:00:00").getTime();


var x = setInterval( function() {
  var now = new Date().getTime();
  var diff = countDate - now;
  var day = Math.floor(diff/(1000 * 60 * 60 * 24));
  var hour = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
  var minute = Math.floor(diff % (1000* 60 * 60) / (1000 * 60));
  var second = Math.floor(diff % (1000* 60) / (1000));
  document.getElementById("about").innerHTML = day + "d" + " " + hour + "h" + " " + minute + "m" + " "  + second + "s" + " " + "REMAINING";
  if (diff < 0) {
    clearInterval(x);
    document.getElementById("about").innerHTML = "Expired";
  }
  }, 1000);

  // search result
  const searchButton = document.getElementById("searchbtn");
  const searchInput = document.getElementById("searchint");
  const searchResults= ["python", "r", "sas", "machine learning", "deep learning", "numpy", "pandas", "matplotlib"];
  searchButton.addEventListner("click", () => {
    const value = searchInput.value;
    searchResults.forEach(searchResult => {
      const isVisible = searchResult.includes(value)
      searchResult.element.classList.toggle("hide", !isVisible)
    })
  })
