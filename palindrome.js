let num = 12321; 
let reverse = 0; 
for(let i = num; i > 0; i=Math.floor(i/10)){
    reverse = reverse* 10 + i % 10;
}
if(num === reverse){
    console.log("Palindrome");
}else{
    console.log("Not a palindrome");
}