window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext("2d");//2D
    canvas.height = window.innerHeight //same size as window
    canvas.width = window.innerWidth//same size as window
    c.lineWidth = 15;
    let paint = false;
    c.lineCap = 'round';
    //c.lineWidth = 20;
    function startPoint(e) {
        paint = true;
        draw(e);//to draw dots
    }
    function endPoint() {
        paint = false;
        c.beginPath();
    }
    function draw(e) {
        if (!paint) {
            return;
        }
        c.strokeStyle = `hsl(${value}, 100%, 50%)`;
        c.beginPath();
        c.moveTo(e.clientX, e.clientY);
        c.lineTo(e.clientX, e.clientY);
        c.stroke();
    }
    canvas.addEventListener('mousedown', startPoint)
    canvas.addEventListener('mouseup', endPoint)
    canvas.addEventListener('mousemove', draw)
});

function red() {
    value = 10;
}

function orange() {
    value = 30;
}

function yellow() {
    value = 60;
}

function green() {
    value = 100;
}

function blue() {
    value = 210;
}

function pink() {
    value = 330;
}

function indigo() {
    value = 290;
}
