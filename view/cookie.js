function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  //console.log(decodedCookie);
  var ca = decodedCookie.split(';');
   //console.log("vu sinh huy");
   //console.log(String(ca));
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("inforlogin");
  if (user != "") {
    //alert("Welcome again " + user);
    alert("Hey you back to home ");
  } else {
     window.location.href = "view/login.html";
  }
}
function checkCookieUpload() {
  var user=getCookie("inforlogin");
  if (user != "") {
    //alert("Welcome again " + user);
    //alert("Hey you back to home ");
  } else {
     window.location.href = "login.html";
  }
}
