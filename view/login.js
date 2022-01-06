
async function loginrequest(UserObject) {
    const response = await fetch('../control/login.php', {
        method: 'POST',
        body: JSON.stringify(UserObject)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}

async function processlogin(userinfor) {
    var response= await loginrequest(userinfor);
    //console.log(response);
    var resultlogin = JSON.parse(response);
    console.log(resultlogin);
    if (resultlogin.status == "true") {
        console.log("congratilation");
        //var tmpif = JSON.parse(str);
        userinfor.name = resultlogin.name;
        var jsonuser = JSON.stringify(userinfor);
        //console.log(jsonuser);
        setCookie("inforlogin", jsonuser, 30);
        alert("login succesed ");
        window.location.href = "../";
    } else {
        console.log("no thank you");
        document.getElementById("resultlogin").innerHTML = "Sai tên đăng nhập hoặc mật khẩu";
    }
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
    processlogin(userinfor);
}

