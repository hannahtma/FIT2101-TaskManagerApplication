function changeColor(getColor){
    let color = document.querySelector('.color');
    let selectColor = getColor.value;
    color.style.background = selectColor;
}