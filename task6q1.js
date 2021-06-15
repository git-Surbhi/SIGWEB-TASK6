console.log("******Check whether given year is leap year or not******")
let year = 2004;
console.log("Given year is "+ year);
if(year%4==0 || year %100 ==0 || year % 400 ==0 )
    {
        console.log(year + ` is a Leap year`);
    }
else 
    {
        console.log(year + ` is not a leap year`);
    }