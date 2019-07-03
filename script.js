const rect = require('./rectangle');

function solveRect(l,b){
    console.log("solving rectangle for "+l+" and "+b+" is: ")
    if (l<= 0 || b <=0){
       console.log("dimensions should be greater than 0"); 
    }
    else{
        console.log("area is: "+rect.area(l,b)+"\nperimeter is : "+rect.perimeter(l,b));
    }

}

solveRect(10,5);
solveRect(5,6);
solveRect(0,19);