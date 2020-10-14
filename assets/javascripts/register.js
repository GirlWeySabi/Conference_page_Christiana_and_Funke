function purchase() {
    var yourName = document.getElementById("yourName").value;
    var yourEmail = document.getElementById("yourEmail").value;
    var noPasses = document.getElementById("noPasses").value;
    var comment = document.getElementById("comment").value;
    console.log(yourName, yourEmail, noPasses, comment);
    
    if (yourName == "" || yourEmail == "" || noPasses < 0 || comment == "") {
        alert("input Missing Field");
        } 
        else {alert ("Your Inputs:" + "\r\n" + "\r\n"+ "Name: " + yourName + "\r\n" +  "Email Address: " + yourEmail +  "\r\n" +  "Number of Passes: " + noPasses + "\r\n" + "Comment: " + comment)};

}