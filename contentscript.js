(() => {
    var panel = document.createElement('div');
    panel.className = 'pickup_panel';
    document.body.appendChild(panel);

    var pickup_vertical_line = document.createElement('div');
    pickup_vertical_line.className = 'pickup_vertical_line';
    pickup_vertical_line.style.height = document.body.clientHeight + 'px';
    document.body.appendChild(pickup_vertical_line);

    var pickup_horizontal_line = document.createElement('div');
    pickup_horizontal_line.className = 'pickup_horizontal_line';
    document.body.appendChild(pickup_horizontal_line);

    var pickup_panel = document.querySelector('.pickup_panel');
    var mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', event => {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        var target = event.target;

        if(target.tagName.toLowerCase() == 'img'){
            let x = getElementLeft(target);
            let y = getElementTop(target);
            pickup_panel.style.opacity = 1;
            pickup_vertical_line.style.opacity = 1;
            pickup_horizontal_line.style.opacity = 1;
            pickup_panel.innerHTML = `(${mouseX - x}, ${mouseY - y})`;
        }else{
            pickup_panel.style.opacity = 0;
            pickup_vertical_line.style.opacity = 0;
            pickup_horizontal_line.style.opacity = 0;
        }

        pickup_vertical_line.style.left = mouseX + 'px';
        pickup_horizontal_line.style.top = mouseY + 'px';
        pickup_panel.style.left = mouseX + 'px';
        pickup_panel.style.top = mouseY + 'px';
    });

    function getElementLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualLeft;
　　}
　　function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualTop;
　　}
})();

