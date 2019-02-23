function Stickman() {

    let stickmanCounter = 0;

    return {
        drawNext: drawNext
    };

    function drawNext() {
        let drawFunctions = getStickmanDrawFunctions();
        drawFunctions[stickmanCounter]();
        stickmanCounter++;
        return;

        function getStickmanDrawFunctions(){
            let canvas = document.getElementById("canvas");
            let context = canvas.getContext('2d');
            context.beginPath();
            context.strokeStyle = '#006a71';

            const draw = (pathFromX, pathFromY, pathToX, pathToY) => {
                context.moveTo(pathFromX, pathFromY);
                context.lineTo(pathToX, pathToY);
                context.stroke();
            };

            const part1 = () => draw (0, 140, 500, 140);
            const part2 = () => draw (100, 140, 100, 20);
            const part3 = () => draw (100, 20, 200, 20);
            const part4 = () => draw (200, 20, 200, 40);
            const part5 = () => {
                context.beginPath();
                context.arc(200, 55, 15, 0, Math.PI*2, true);
                context.stroke();
            };
            const part6 = () => draw (200, 70, 200, 110);
            const part7 = () => draw (200, 80, 180, 90);
            const part8 = () => draw (200, 80, 220, 90);
            const part9 = () => draw (200, 110, 180, 120);
            const part10 = () => draw (200, 110, 220, 120);

            return [part1, part2, part3, part4, part5, part6, part7, part8, part9, part10];
        }
    }
}

module.exports = Stickman;