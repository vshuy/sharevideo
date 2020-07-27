function registerrq(str) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             //console.log(this.responseText);
            //console.log(Boolean(Number(this.responseText)));
            //var status=Boolean(Number(this.responseText));
            //console.log(status);
            if (Boolean(Number(this.responseText))) {
                console.log("congratilation");
                setCookie("inforlogin", str, 30);
                window.location.href = "../";
            } else {
                console.log("no thank you");
                document.getElementById("resultregister").innerHTML = "Email này đã có người đăng ký";
            }
        }
    }
    ;
    //password 123445
    xmlhttp.open("POST", "../model/register.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + str);
    return xmlhttp.onreadystatechange;
}
function receiveregister() {
    document.getElementById("resultregister").innerHTML = "";
    var uname = document.forms["registerform"]["username"].value;
    var email = document.forms["registerform"]["email"].value;
    var password = document.forms["registerform"]["password"].value;
    var repassword = document.forms["registerform"]["repassword"].value;
    if (password != repassword) {
        document.getElementById("resultregister").innerHTML = "password nhập lại không khớp";
    } else {
        if (email == "" || password == "" || uname == "") {
            console.log("các form không được trống");
            document.getElementById("resultregister").innerHTML = "các form không được trống";
        } else {
            var userinfor = {
                name: uname,
                email: email,
                password: password
            };
            var jsonuser = JSON.stringify(userinfor);
            //console.log(jsonuser);
            registerrq(jsonuser);
        }
    }

}
