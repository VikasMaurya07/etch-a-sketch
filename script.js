const gridbox = document.querySelector('#grids');
const eraserOn = document.querySelector('#eraserOn');
const pencolor = document.querySelector('#pen');
const penColorInput = document.querySelector('#penselector');
const penColorSelect = document.querySelector('#penSelect');
const pixelInput = document.querySelector('#pixelselector');
const bgInput = document.querySelector('#bgselector');
const set = document.querySelector('#setter');
const darkner = document.querySelector('#darknerOn')
const rainbowOn = document.querySelector('#rainbowOn')

function rainbow (div) {
    rainbowOn.addEventListener('click', function () {
        let color = div.style.backgroundColor;
        div.addEventListener('click', function () {
            let x = Math.floor(1 + Math.random() * 6.99);
            if (x == 1) {
                color = 'violet';
            }
            if (x == 2) {
                color =  'indigo';
            }
            if (x == 3) {
                color = 'blue';
            }
            if (x == 4) {
                color = 'green';
            }
            if (x == 5) {
                color = 'yellow';
            }
            if (x == 6) {
                color = 'orange';
            }
            if (x == 7) {
                color = 'red';
            }
            console.log(x);
            div.style.backgroundColor = color;
        });
        div.addEventListener('mouseleave', function () {
            div.style.backgroundColor = color;
        });
    });
   
}
function blackshade(div) {
    let color;
    darkner.addEventListener('click', function () {
        let currentShade;
        color = div.style.backgroundColor;
        div.addEventListener('mouseenter', function () {
            currentShade = -10;
        });
        div.addEventListener('click', function () {
            currentShade = Math.min(currentShade + 10, 100);
            if (currentShade >= 0) {
                div.style.backgroundColor = `hsl(0, 0%, ${100 - currentShade}%)`;
                color = div.style.backgroundColor;
            };
        });
        div.addEventListener('mouseleave', function () {
            div.style.backgroundColor = color;
            currentShade = 0;
        });
    });
};
function setter() {
    set.addEventListener('click', function () {
        let pixels = parseInt(pixelInput.value);
        let bgcolor = bgInput.value;
        gridbox.innerHTML = '';
        gridmaker(pixels, bgcolor);
    });
};
function pen(div) {
    penColorSelect.addEventListener('click', function () {
        mouseLeaveColor(div, penColorInput.value);
    });
}
function eraser(div, bgcolor) {
    eraserOn.addEventListener('click', function () {
        let color = div.style.bgcolor;
        div.addEventListener('click', function () {
            div.style.backgroundColor = bgcolor;
            color = bgcolor;
        });
        div.addEventListener('mouseleave', function () {
            div.style.backgroundColor = color;
        });
    });
};
function mouseEnterColor(div, color) {
    const iniColor = div.style.backgroundColor;
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = color;
    });
    return iniColor;
};
function mouseLeaveColor(div, clickColor = 'white') {
    let color = div.style.backgroundColor;
    div.addEventListener('click', function () {
        div.style.backgroundColor = clickColor;
        color = clickColor;
    });
    div.addEventListener('mouseleave', function () {
        div.style.backgroundColor = color;
    });
};
function gridmaker(num = '16', color = 'aliceblue') {
    const width = 800 / parseInt(num);
    let wid = width + 'px';
    for (let i = 1; i <= num * num; i++) {
        const boxes = document.createElement('div');
        boxes.style.cssText = `width: ${wid}; height: ${wid}; background-color: ${color}`;
        let iniColor = mouseEnterColor(boxes, 'pink');
        mouseLeaveColor(boxes, iniColor);
        pen(boxes);
        eraser(boxes, color);
        rainbow(boxes);
        blackshade(boxes);
        gridbox.appendChild(boxes);
    }
}
setter();