function pedir() {
    let tequila = document.getElementById('tequila')
    let vodka = document.getElementById('vodka')
    let whiskey = document.getElementById('whiskey')
    let foto = document.getElementById('foto')
    let amostra = document.getElementById('amostra') 
    if (tequila.checked) {
        foto.innerHTML = `Bad Luck Tequila`
        amostra.setAttribute('src', 'tequila.jpg')
    } else if (vodka.checked) {
        foto.innerHTML = `Ice Vantage Vodka`
        amostra.setAttribute('src', 'vodka.jpg')
    } else if (whiskey.checked) {
        foto.innerHTML = `Big Bull Whiskey`
        amostra.setAttribute('src', 'whiskey.jpg')
    }
    foto.appendChild(amostra)
}