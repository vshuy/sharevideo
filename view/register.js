async function registerrequest(formattedFormData) {
    const response = await fetch('../control/register.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}
async function processregister(userinfor) {
    var response = await registerrequest(userinfor);
    //console.log(response);
    if (JSON.parse(response) == true) {
        console.log("congratilation");
        var jsonuser = JSON.stringify(userinfor);
        setCookie("inforlogin", jsonuser, 30);
        window.location.href = "../";
    } else {
        console.log("no thank you");
        document.getElementById("resultregister").innerHTML = "Email này đã có người đăng ký";
    }

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
            processregister(userinfor);
        }
    }

}
