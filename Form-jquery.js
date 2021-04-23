$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    })
    $("input").focus(function(){
        $(this).css("backgroundColor","yellow")
    });
    $("input").blur(function(){
        $(this).css("backgroundColor","purple")
    });

    //form data
    var name,age,pincode,gender; //fetch these
    var pincodes = {
        "udaipur" :313001,
        "jaipur" :302001,
        "mumbai" :400011,
        "pune" :411001,
        "delhi" :110001,
    }
    $("#submit").click(function(){
        name = $("#name").val();
        age = $("#age").val();
        pincode = $("pincode").val();
        gender = $("input[name='gender']:checked").val();

        //get first name
        name=name.split(" ")[0]  
        
        //grab city
        city = getKeyByValue(pincodes,pincode);
        console.log(gender,name,age,pincode);

       
        //check age limit
        if(age<18){
            $("#panel").append('<p id="warning"></p>')
            $("#warning").text("Hey! You should be older than 18").css("color","red")
        }

        function getKeyByValue(object,value){
            keys = Object.keys(object);
            city = keys.find(key => object[key]==value)
            console.log(keys);
        }     
    });
      

    $("#replace").click(function(){
        if (age>17){
            $("#data").css("color","black").html("First name:="+name+"<br><br>"+"Age="+age+"<br><br>"+"city="+city+"<br><br>"+"Gender ="+gender)
        }
        else{
            $("#data").text("ACCESS DENIED").css("color","red")
        }
    })
});

      

