var techSlid = document.getElementsByClassName("tech-slide");

function techBox(index){
    for (var i = 0; i < techSlid.length; i++) {
        if (i == index) {
            techSlid[i].style.display = "block";
        } else {
            techSlid[i].style.display = "none";
        }
    }
}

