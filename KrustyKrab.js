$(document).ready(()=>{                
    $("#validate").click(verify);
            
    let user;
    let pass;
                
    function verify(){ //DEFAULT USERNAME AND PASSWORD
        user = $("#user").val();
        pass = $("#pass").val();

        if(user =="admin" && pass=="p@ssword"){
            window.location = "KrustyKrabIn.html"
        }
        else{
            $("#user").val("");
            $("#pass").val("");
            alert("The username or password is incorrect!");    
        }
    }
})