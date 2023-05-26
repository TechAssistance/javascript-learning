//the mission is simple: print out a pyramid shape to the console, given the height
//for example, given height = 5, print out:
//    *     
//   ***
//  *****
// *******
//*********

function createPyramid(height){
    maxWidth = height*2-1;
    const pyramid = [];
    for(let i = 0; i < height; i++){
        const rowWidth = 2*i+1;
        const padding = Math.floor((maxWidth-rowWidth)/2);
        const row = " ".repeat(padding) + "*".repeat(rowWidth) + " ".repeat(padding);
        pyramid.push(row);
    }

    //return the pyramid as a string, with each row separated by a newline
    return pyramid.join("\n"); 
}

console.log(createPyramid(5));
