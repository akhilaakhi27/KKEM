// console.log("hello world")
// let a=12;
// console.log(a)

// let a={
//     name:'Anitha',
//     age:23
// }
// console.log(typeof(a))

// let b=['apple','orange','cherry','banana']
// console.log(b[0])

// function btnClick(){
//     alert("Button is clicked");
// }

// function btnClick(){
//     prompt("Button is clicked");
// }

function btnClick()
{
let username=document.getElementById('t1').value;
let password=document.getElementById('p1').value;
if(username==""||password==""){
    alert("Enter username and password");
    return false;
}
else{
    alert("login successful");
    return true;
}
}