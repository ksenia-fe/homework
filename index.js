// let arr = [2,3,4,1];
// let sum = 0;
let sum = 0;

function checkSum(arr) {

  if(!Array.isArray(arr)){
    return null;
  }

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  if(sum > 100){
    return true;
  }else return false;

}

// console.log(checkSum(arr));