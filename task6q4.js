console.log("******Merging of arrays******");
	
const arr1 = [6, 3 ,7 , 8 , 9];
const arr2 = [10 , 3 ,4 ,2, 1];

    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    
    while (current < (arr1.length + arr2.length)){
        let unmerged1 = arr1[index1];
        let unmerged2 = arr2[index2];
        let arr1empty = (index1 >= arr1.length);
        let arr2empty = (index2 >= arr2.length);
        
        if (!arr1empty && (arr2empty||(arr1[index1] < arr2[index2]))) {
            merged[current] = unmerged1;
            index1++;
        }
         else {
            merged[current] = unmerged2;
            index2++;
        }
        current++;
    }
    merged = merged.sort();
    console.log(merged);
// const merged = [...a , ...b];
// console.log(merged);
    
console.log("******Removal of duplicate elements******");

function uni(arr){
    
    let uniqueArr = [];
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) == -1) {
            uniqueArr.push(i);
        }
    }
  
   console.log(uniqueArr);
}
uni(merged);


	




