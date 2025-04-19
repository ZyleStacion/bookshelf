function openHamburger() {
    document.getElementById('navbar').style.visibility = 'visible';
    document.getElementById('close').style.visibility = 'visible';
    document.getElementById('hamburger').style.visibility = 'hidden';
}
function closeHamburger() {
    document.getElementById('navbar').style.visibility = 'hidden';
    document.getElementById('close').style.visibility = 'hidden';
    document.getElementById('hamburger').style.visibility = 'visible';
}