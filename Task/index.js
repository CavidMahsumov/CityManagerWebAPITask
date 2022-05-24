$("#sub").click(function () {
    var person=new Object();
    person.Name=$("#fname").val();
    person.Password=$("#pass").val();
    $.ajax({
        type: "POST",
        url: "https://localhost:7193/api/Auth/Register",
        data: person,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert("Hello: " + response.Name + ".\nCurrent Date and Time: " + response.DateTime);
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
});


// $(document).ready(function () {  
//     $("#sub").click(function () {  
//         var person = new Object();  
//         person.name = $('#fname').val();  
//         person.password = $('#pass').val();  
//         $.post('https://localhost:7193/api/Auth', person, function (data) {  
//             console.log(data);  
//         });  
        
//     });  
// });  