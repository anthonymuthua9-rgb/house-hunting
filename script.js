

// ========== SEARCH FEATURE ==========
const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const loc = document.getElementById("location").value;
    const budget = document.getElementById("budget").value;

    if (loc && budget) {
      alert(`Searching for homes in ${loc} under $${budget}`);
    } else if (loc) {
      alert(`Searching for homes in ${loc}`);
    } else if (budget) {
      alert(`Searching for homes under $${budget}`);
    } else {
      alert("Please enter a location or budget to search.");
    }
  });
}


