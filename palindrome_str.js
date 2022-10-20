let str = "abba";
let len = str.length-1;
let rev = "";

for(let i=len; i>=0; i--){
      rev = rev + str[i]; 
}
if(rev == str){
  console.log("Yes")
}
else{
  console.log("No")
}
