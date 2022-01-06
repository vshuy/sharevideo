function firstload() {
    var tmpuser = getCookie("inforlogin");
    if (tmpuser != "") {
        var user = JSON.parse(tmpuser);
        //var nameac = document.querySelector("#nameaccount");
        //var emailac = document.querySelector("#emailaccount");
        //var passwordac = document.querySelector("#passwordaccount");
        document.getElementById("nameaccount").value = user.name;
        document.getElementById("emailaccount").innerHTML = user.email;
        document.getElementById("passwordaccount").value = user.password;

    } else {
        window.location.href = "login.html";
    }
    setvaluebutoninout();
    setdomainsearch();
}
async function updateusernamerequest(formattedFormData) {
    const response = await fetch('../control/updateusername.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}
async function updatepasswordrequest(formattedFormData) {
    const response = await fetch('../control/updatepassword.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}
function updateusernameprocess(uname) {
    updateusernamerequest(uname);
}
function updatepasswordprocess(uname) {
    updatepasswordrequest(uname);
}
function renameaccount() {
    var nameac = document.getElementById("nameaccount").value;
    //console.log(nameac);
    var tmpuser = getCookie("inforlogin");
    var user = JSON.parse(tmpuser);
    if (user.name != nameac) {
        var tmpusername = {
            newname: nameac,
            email: user.email,
            password: user.password
        };

        updateusernameprocess(tmpusername);

        alert("update username succesed ");
        user.name = nameac;
        var jsonuser = JSON.stringify(user);
        //console.log(jsonuser);
        setCookie("inforlogin", jsonuser, 30);
        manageprofile();
    } else {
        alert("nothing change update failse");
    }
}
function changepassword() {
    var passwordac = document.getElementById("passwordaccount").value;
    //console.log(nameac);
    var tmpuser = getCookie("inforlogin");
    var user = JSON.parse(tmpuser);
    if (user.password != passwordac && passwordac != "") {
        /////////////////////////////////////////////////////////////////////////////////////
        var newpassword = prompt("Please enter new password again:");
        if (newpassword == null || newpassword == "" || newpassword != passwordac) {
            alert("update new password failed, form is empty or repassword is not valid");
        } else {
            var tmpusername = {
                newpassword: passwordac,
                email: user.email,
                password: user.password
            };

            updatepasswordprocess(tmpusername);

            alert("update new password successed ");
            user.password = passwordac;
            var jsonuser = JSON.stringify(user);
            //console.log(jsonuser);
            setCookie("inforlogin", jsonuser, 30);
            manageprofile();

        }
        ///////////////////////////////////////////////////////////////////////////////////

    } else {
        alert("new password not change update failed");
    }
}
