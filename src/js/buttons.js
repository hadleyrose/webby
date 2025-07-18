


document.addEventListener("DOMContentLoaded", function() {
    
    const dialog = document.getElementsByClassName("window");
    
    // close window on Close button click
    const dialogCloseButton = document.getElementById("Close");

    console.log(dialog);
    dialogCloseButton.addEventListener("click", function() {
        console.log('You clicked!');
        dialog[0].style.display = "none";
    });

    // open window on Canvas click
    const canvas = document.getElementsByClassName("webgl");
    canvas[0].addEventListener("click", function() {
        console.log('You clicked the canvas!');
        dialog[0].style.display = "block";
    });
});


