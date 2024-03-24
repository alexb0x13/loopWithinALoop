function drawTriangle(triangleSize) {

let star = "*";
let lineCount = 0;

while (lineCount < triangleSize) {
    let starPrint = 0;
    let line = "";
    while (starPrint <= lineCount) {
        line += star;
        starPrint++;
    }
    console.log(line);
    lineCount++;
    }

}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(100);


// Do NOT remove the following line
export default drawTriangle;