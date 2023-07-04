var boxes = document.getElementsByClassName("slide-descrition");

function showBox(index){
    for (var i = 0; i < boxes.length; i++) {
        if (i == index) {
            boxes[i].style.display = "block";
        } else {
            boxes[i].style.display = "none";
        }
    }
}