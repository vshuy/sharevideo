
function loginrq(str) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var resultlogin = JSON.parse(this.responseText);
            //console.log(resultlogin);
            if (resultlogin.status=="true") {
                console.log("congratilation");
                var tmpif = JSON.parse(str);
                tmpif.name=resultlogin.name;
                var jsonuser = JSON.stringify(tmpif);
                //console.log(jsonuser);
                setCookie("inforlogin", jsonuser, 30);
                alert("login succesed ");
                window.location.href = "../";
            } else {
                console.log("no thank you");
                document.getElementById("resultlogin").innerHTML = "Sai tên đăng nhập hoặc mật khẩu";
            }
        }
    }
    ;
    //password 123445
    xmlhttp.open("POST", "../model/login.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + str);
    return xmlhttp.onreadystatechange;
}
function receivelogin() {
    document.getElementById("resultlogin").innerHTML = "";
    var email = document.forms["loginform"]["email"].value;
    var password = document.forms["loginform"]["password"].value;
    var userinfor = {
        name: "",
        email: email,
        password: password
    };
    var jsonuser = JSON.stringify(userinfor);
    //loginrq(jsonuser);
    //console.log(loginrq(jsonuser));
    loginrq(jsonuser);
}

