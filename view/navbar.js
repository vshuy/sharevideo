function setvaluebutoninout() {
    var butoninout = document.querySelector("#idbtlogout");
    var user = getCookie("inforlogin");
    if (user != "") {
        butoninout.innerHTML = "ĐĂNG XUẤT";
    } else {
        butoninout.innerHTML = "ĐĂNG NHẬP";
    }
}
function gotohome(){
    window.location.href = "../index.html";
}
function setdomainsearch() {
    var domainname = JSON.parse(getCookie("listnameforsearch"));
    autocomplete(document.getElementById("idsearch"), domainname);
}
function manageprofile() {
    window.location.href = "userupdate.html";
}
function manageyourvideo() {
    window.location.href = "manage.html";
}
function signinout() {
    var user = getCookie("inforlogin");
    if (user != "") {
        setCookie("inforlogin", "", 30);
        alert("logout succeedfull");
        window.location.href = "../index.html";
    } else {
        window.location.href = "login.html";
    }
}
function uploadvideo() {
    window.location.href = "ajaxup.html";
}