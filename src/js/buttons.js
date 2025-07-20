


document.addEventListener("DOMContentLoaded", function() {
    
    const dialog = document.getElementsByClassName("window");
    const ogStyle = dialog[0].getAttribute("style");
    console.log(ogStyle);

    // close window on Close button click
    const dialogCloseButton = document.getElementById("Close");

    console.log(dialog);
    dialogCloseButton.addEventListener("click", function() {
        console.log('You clicked!');
        dialog[0].style.display = "none";
    });

    // minimize window on Minimize button click
    const dialogMinimizeButton = document.getElementById("Minimize");

    dialogMinimizeButton.addEventListener("click", function() {
        console.log('You clicked!');
        const minStyle = "position: absolute; left: 88%; bottom: 0; transform: translate(0%, -30%);";
        const display = dialog[0].getElementsByClassName("window-body")[0].style.display;
        if (display == "none") {
            dialog[0].style = ogStyle;
            console.log(ogStyle);
            dialog[0].getElementsByClassName("window-body")[0].style.display = "block";
        }
        else {
            dialog[0].style = minStyle;
            dialog[0].getElementsByClassName("window-body")[0].style.display = "none";
        }
    });    

    // open window on Canvas click
    const canvas = document.getElementsByClassName("webgl");
    canvas[0].addEventListener("click", function() {
        console.log('You clicked the canvas!');
        dialog[0].style = ogStyle;
        // revert window-body style if minimized
        dialog[0].getElementsByClassName("window-body")[0].style.display = (dialog[0].getElementsByClassName("window-body")[0].style.display == "none") ? "block": "";
    });
});


