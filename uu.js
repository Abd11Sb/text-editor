function log(){
    var user,pass
    user=document.getElementById("username").value;
    pass=document.getElementById("password").value;

    if(user=="abd" && pass=="ab332"){
        window.location="index.html";
    }else{
        alert("the username or password is wrong ");
    }
}