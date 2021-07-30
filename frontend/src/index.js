document.addEventListener('DOMContentLoaded', () => (
  Genre.getGenres()
));

const url = "http://localhost:3000"
const apiCall = new ApiCall(url)
