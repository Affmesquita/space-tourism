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

 
function changeContent(){
    let radio1 = getElementById('radio-1');
    let radio2 = getElementById('radio-2');
    let radio3 = getElementById('radio-3');
    let radio4 = getElementById('radio-4');
    let crewInformation = getElementById('getElementByID');
    let crewImg = getElementById('crew-img');
    if (radio1.checked){
        crewInformation.innerText = 
        <><h2>FLIGHT ENGINNER</h2>
        <h1>ANOUSHEH ANSARI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam optio atque. Enim, dolorem iure temporibus nobis deleniti rem culpa consequatur mollitia..</p></>
        crewImg.setAttribute('src', 'image-anousheh-ansari.png')
    } else if (radio2.checked){
        crewInformation.innerText = 
        <><h2>DOUGLAS HURLEY</h2>
        <h1>DOUGLAS HURLEY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam optio atque. Enim, dolorem iure temporibus nobis deleniti rem culpa consequatur mollitia..</p></>
        crewImg.setAttribute('src', 'image-douglas-hurley.png')
    }
}
