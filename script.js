$(document).ready(function(){
    $("#create").click(function(){
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'name1='+ name + '&email1='+ email + '&password1='+ password;
    if( username==''||email==''||password=='')
    {
    alert("Please Fill All Fields");
    }
    else
    {
    // AJAX Code To Submit Form.
    $.ajax({
    type: "POST",
    url: "register.php",
    data: dataString,
    cache: false,
    success: function(result){
    alert(result);
    }
    });
    }
    return false;
    });
    });
    
