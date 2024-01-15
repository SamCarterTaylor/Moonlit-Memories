document.addEventListener("DOMContentLoaded", function () {
    var entryHeaders = document.querySelectorAll(".entry-header");

    entryHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            var entryContent = this.nextElementSibling;

            if (entryContent.style.display === "none" || entryContent.style.display === "") {
                entryContent.style.display = "block";
            } else {
                entryContent.style.display = "none";
            }
        });
    });
});
