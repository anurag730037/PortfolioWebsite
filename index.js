
  


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