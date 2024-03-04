let bar = document.getElementById('bar');
let ul = document.getElementById('ul');
bar.addEventListener("click",function(){
    ul.classList.toggle("showData");

    // if(ul.className == "showData"){
    //     bar.className ='fa fa-solid fa-xmark'
    // }
    // else{
    //     bar.className="fa fa-solid fa-bars"
    // }
})
  


let submit = document.getElementById('submit');

submit.addEventListener("click" ,function(){
    let email = document.getElementById('email');
    let name = docum.getElementById('name');

    if(email.value == "" && name.value == ""){
        alert("Please Fill Deatils")
    }
    else{
        alert("Submitted Thank You !")
    }
})