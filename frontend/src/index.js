document.addEventListener('DOMContentLoaded', () => (
  Genre.getGenres(),
  Show.renderCartPanel(),
  Show.checkoutListener(),
  stopIconClick()
));

function stopIconClick() {
  let icon = document.getElementById('logo')
  icon.addEventListener("click", function(e) {
    e.preventDefault()
  });
}

const url = "http://localhost:3000"
const apiCall = new ApiCall(url)
