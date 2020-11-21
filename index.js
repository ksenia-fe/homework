// let arr = [2,3,4,100];
// let sum = 0;

function checkSum(arr) {
  let sum = 0;
  if(Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      sum += i;
    }
    if(sum > 100){
      return true;
    }else if(sum <= 100){
      return false;
      }
  }else return null;
}

// console.log(checkSum(arr));