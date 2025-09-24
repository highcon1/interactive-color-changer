document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded and ready!");

    // Example: attach your button event here
    const changeBtn = document.getElementById("change-color-btn");
    const colorBox = document.getElementById("color-box");

    function getRandomColor() {
        // generate a random color
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        colorBox.style.backgroundColor = randomColor;
    }

    changeBtn.addEventListener("click", function () {
        getRandomColor();
    });
});