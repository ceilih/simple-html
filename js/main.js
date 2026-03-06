const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(toggleButtons => {
    toggleButtons.addEventListener('click', function(event) {
        event.stopPropagation();
        this.nextElementSibling.classList.toggle('expanded');
    });
});



const myModal = document.querySelector('.overlay');


window.addEventListener("load", function () {
    setTimeout(function open() {
        myModal.style.display = "flex";
    }, 3000)
    // 3000 = 3 second timeout
})

document.getElementById("close").addEventListener("click", () => {
    myModal.style.display = "none"
})
