var rect = require('./rectangle');



function solveRect(l,b){
  console.log("Solving for rectangle with l = " + l + " and b = "+ b  );

  if ( l <= 0 || b <= 0){
    console.log("Rectangle dimentions should be greater than zero : l = " + l + ", and b = "+ b);
  }
  else{
    console.log("The area of the Rectangle is " + rect.area(l,b));
    console.log("The perimeter of the Rectangle is "+ rect.perimeter(l,b));
  }
}

solveRect(2,4);
solveRect(-12,3);
solveRect(1,6);
solveRect(12,14);
