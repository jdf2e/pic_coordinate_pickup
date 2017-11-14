(() => {
    var pickup_panel = document.createElement('div');
    pickup_panel.className = 'pickup_panel';
    document.body.appendChild(pickup_panel);

    var pickup_vertical_line = document.createElement('div');
    pickup_vertical_line.className = 'pickup_vertical_line';
    pickup_vertical_line.style.height = document.body.clientHeight + 'px';
    document.body.appendChild(pickup_vertical_line);

    var pickup_horizontal_line = document.createElement('div');
    pickup_horizontal_line.className = 'pickup_horizontal_line';
    document.body.appendChild(pickup_horizontal_line);

    var mouseX = 0;
    var mouseY = 0;
    var isMouseDown = false;
    var index = 0;
    var relativeX = 0;
    var relativeY = 0;

    document.addEventListener('mousemove', event => {
        var target = event.target;
        mouseX = event.pageX;
        mouseY = event.pageY;
        event.preventDefault();

        if(target.tagName.toLowerCase() == 'img'){
            target.style.cursor = 'crosshair';
            pickup_vertical_line.style.opacity = 1;
            pickup_horizontal_line.style.opacity = 1;

            if(isMouseDown){
                let pickup_react = document.querySelector('#pickup_react' + index);
                let width = mouseX - parseInt(pickup_react.style.left);
                let height = mouseY - parseInt(pickup_react.style.top);
                pickup_react.style.width = width + 'px';
                pickup_react.style.height = height + 'px';

                let coordinate2 = pickup_react.querySelector('.coordinate2');
                coordinate2.innerHTML = `(${mouseX - relativeX}, ${mouseY - relativeY})`;
            }
        }else{
            target.style.cursor = 'default';
            pickup_vertical_line.style.opacity = 0;
            pickup_horizontal_line.style.opacity = 0;
        }

        pickup_vertical_line.style.left = mouseX + 'px';
        pickup_horizontal_line.style.top = mouseY + 'px';
        pickup_panel.style.left = mouseX + 'px';
        pickup_panel.style.top = mouseY + 'px';
    });

    document.addEventListener('mousedown', event => {
        var target = event.target;
        if(target.tagName.toLowerCase() == 'img'){
            index = index + 1;
            relativeX = getElementLeft(target);
            relativeY = getElementTop(target);

            let pickup_react = document.createElement('div');
            pickup_react.className = 'pickup_react';
            pickup_react.id = 'pickup_react' + index;
            pickup_react.style.left = event.pageX + 'px';
            pickup_react.style.top = event.pageY + 'px';

            let coordinate1 = document.createElement('div');
            coordinate1.className = 'coordinate1';
            coordinate1.innerHTML = `(${event.pageX - relativeX}, ${event.pageY - relativeY})`;

            let coordinate2 = document.createElement('div');
            coordinate2.className = 'coordinate2';

            pickup_react.appendChild(coordinate1);
            pickup_react.appendChild(coordinate2);
            document.body.appendChild(pickup_react);
            isMouseDown = true;
        }
    });

    document.addEventListener('mouseup', () => {
        var pickup_react = document.querySelector('#pickup_react' + index);
        var width = parseInt(pickup_react.style.width);
        var height = parseInt(pickup_react.style.height);
        if(width < 50 && height < 50){
            document.body.removeChild(pickup_react);
        }
        isMouseDown = false;
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

