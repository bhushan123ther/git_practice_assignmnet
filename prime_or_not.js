let no = 11;
let count = 0;

for(let i=1; i<=no; i++){
  if(no%i==0){
    count++;
  }
}
if(count == 2){
  console.log("Prime number");
}
else{
  console.log("Not Prime number");
}