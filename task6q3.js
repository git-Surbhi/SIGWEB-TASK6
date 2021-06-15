console.log("******Function as parameter to another function******");
var area_of_circle = function (radius) {
    return 3.14*radius*radius;
}
var input_data = function (a) {
    var r = 7;            //input the radius of circle 
    return a(r);
}
var radius = function(r){
    return r;
}
console.log("Area of circle whose radius is "+ input_data(radius)  + " is " + input_data(area_of_circle));       
 
