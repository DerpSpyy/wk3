document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("movieModal");
    var img = document.querySelector(".movie-poster-container img");
    var span = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
