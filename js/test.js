// This will show examples related with the Common Weakness Enumeration (CWE).

function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x < 0 ) {
        arr[x] = 3;
        arr[x-1] = 3;
    }
    
}

function test(x) {
 if (x) {
     return a;
 } if (!x) {
     return null;
 } else {
     return a;
 }
}

function test2(background) {
    var cssString = "";
    var backPosition;
    if (background.length === 3) {
        cssString += "backgroundPosition: " + backPosition + "px; ";
    }
}
