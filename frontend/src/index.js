document.addEventListener('DOMContentLoaded', () => (
  Genre.getGenres(),
  stopIconClick()
));

function stopIconClick() {
  let icon = document.querySelector('#logo')
  icon.addEventListener("click", function(e) {
    e.preventDefault()
  });
}

const url = "http://localhost:3000"
const apiCall = new ApiCall(url)
