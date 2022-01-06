//////////////////////////////////////////////////////////////////////////////////////////////////////////////this part is navbar
function gotohome() {
    window.location.href = "index.html";
}

function setvaluebutoninout() {
    var butoninout = document.querySelector("#idbtlogout");
    var user = getCookie("inforlogin");
    if (user != "") {
        butoninout.innerHTML = "ĐĂNG XUẤT";
    } else {
        butoninout.innerHTML = "ĐĂNG NHẬP";
    }
}

function firstload() {
    setvaluebutoninout();
    getlistimg();
}

function manageprofile() {
    window.location.href = "view/userupdate.html";
}

function uploadvideo() {
    window.location.href = "view/ajaxup.html";
}

function manageyourvideo() {
    window.location.href = "view/manage.html";
}

function signinout() {
    var user = getCookie("inforlogin");

    if (user != "") {
        setCookie("inforlogin", "", 30);
        alert("logout succeedfull");
        window.location.href = "index.html";
    } else {
        window.location.href = "view/login.html";
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    console.log("hello huy");
});

function getlistimg() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var resultar = JSON.parse(this.responseText);
            var listnameforsearch = [];
            //console.log(resultar);
            for (var i = resultar.linkimg.length - 1; i >= 0; i--) {
                listnameforsearch.push(resultar.namevd[i]);
                addanimagejs(resultar.linkimg[i], resultar.namevd[i], resultar.userup[i], resultar.timeup[i], resultar.views[i], resultar.category[i]);
            }
            autocomplete(document.getElementById("idsearch"), listnameforsearch);
            var tmpa = JSON.stringify(listnameforsearch);
            var tmpb = JSON.stringify(resultar);
            setCookie("listnameforsearch", tmpa, 30);
            setCookie("arrvideo", tmpb, 30);

        }
    };
    xhttp.open("NULL", "control/getobimg.php", "false");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

}

////////////////////////////////////////////////////////////////////////////////////////////
function addanimagejs(linkimg, name, username, timeup, views, category) {
    var urlimg = "control/uploads/image/" + linkimg;
    var tmp = "../control/uploads/video/" + linkimg;
    var urlvideo = tmp.replace(".jpg", ".mp4");
    var imgob = document.createElement("IMG");
    imgob.classList.add("imgoflist");
    var divob = document.createElement("DIV");
    divob.classList.add("col-md-4");
    var divimg = document.createElement("DIV");
    divimg.classList.add("divimg");
    var spob = document.createElement("SPAN");
    spob.classList.add("spname");
    var useob = document.createElement("SPAN");
    useob.classList.add("account");
    var viewstimeupob = document.createElement("SPAN");
    viewstimeupob.classList.add("viewsandtimeup");
    var brob = document.createElement("BR");
    spob.innerHTML = name;
    useob.innerHTML = " " + username;
    viewstimeupob.innerHTML = views + " views-" + timeup;
    imgob.addEventListener("click", function() {
        var infoclip = {
            name: name,
            username: username,
            timeup: timeup,
            views: views,
            category: category,
            linkimg: linkimg,
            urlvideo: urlvideo
        };
        var jsoninfoclip = JSON.stringify(infoclip);
        setCookie("infovideo", jsoninfoclip, 30);
        window.location.href = "view/playvideo.html";
    });
    imgob.setAttribute("src", urlimg);
    divimg.appendChild(imgob);
    divob.appendChild(divimg);
    divob.appendChild(spob);
    divob.appendChild(brob);
    divob.appendChild(viewstimeupob);
    divob.appendChild(useob);
    document.getElementById("idlist").appendChild(divob);

}

//////////////////////////////////////////////////////////////////////////////////////////////