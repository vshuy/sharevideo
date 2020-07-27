
function firstload() {
    var tmpuser = getCookie("inforlogin");
    if (tmpuser != "") {
        var user = JSON.parse(tmpuser);
        addmanagevideo(user.email);
    } else {
        window.location.href = "login.html";
    }
    setvaluebutoninout();
    setdomainsearch();
}
function addmanagevideo(email) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var resultar = JSON.parse(this.responseText);
            //console.log(resultar);
            for (var i = resultar.linkimg.length - 1; i >= 0; i--) {
                addanimagejs(resultar.linkimg[i], resultar.namevd[i], resultar.userup[i], resultar.timeup[i], resultar.views[i], resultar.category[i]);
            }
        }
    }
    ;
    xmlhttp.open("POST", "../model/manage.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + email);
    return xmlhttp.onreadystatechange;
}
function deletevideoreques(video) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {//console.log(this.responseText);           
        }
    }
    ;
    xmlhttp.open("POST", "../model/deletevideo.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + video);
    return xmlhttp.onreadystatechange;
}
function updatenamevideoreques(video) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {//console.log(this.responseText);           
        }
    }
    ;
    xmlhttp.open("POST", "../model/updatename.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + video);
    return xmlhttp.onreadystatechange;
}
function addanimagejs(linkimg, name, username, timeup, views, category) {
    var urlimg = "../model/uploads/image/" + linkimg;
    var tmp = "../model/uploads/video/" + linkimg;
    var urlvideo = tmp.replace(".png", ".mp4");
    var imgob = document.createElement("IMG");
    var liob = document.createElement("DT");
    var divimg = document.createElement("DIV");
    var spob = document.createElement("SPAN");

    var viewstimeupob = document.createElement("SPAN");
    var delbuton = document.createElement("BUTTON");
    var updatenamebuton = document.createElement("BUTTON");
    delbuton.innerHTML = "DELETE THIS VIDEO";
    updatenamebuton.innerHTML = "RENAME";
    imgob.classList.add("imgoflist");
    liob.classList.add("dt");
    divimg.classList.add("divimg");
    spob.classList.add("spname");
    viewstimeupob.classList.add("viewsandtimeup");
    delbuton.classList.add("butondelete");
    updatenamebuton.classList.add("butonupdatename");
    var brob = document.createElement("BR");
    spob.innerHTML = name;
    viewstimeupob.innerHTML = views + " views-" + timeup;
    updatenamebuton.addEventListener("click", function() {
        var newname = prompt("Please enter new your video name:", name);
        if (newname == null || newname == "" || newname == name) {
            alert("update name failse, form is empty or nothing change");
        } else {
            //alert("new name is :"+newname);
            var tmpuser = getCookie("inforlogin");
            var user = JSON.parse(tmpuser);
            var infoclip = {
                email: user.email,
                password: user.password,
                newname: newname,
                linkimg: linkimg
            };
            var jsoninfoclip = JSON.stringify(infoclip);
            updatenamevideoreques(jsoninfoclip);
            alert("update name succesed ");
            window.location.href = "manage.html";
        }
    });
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
        window.location.href = "playvideo.html";
    });
    delbuton.addEventListener("click", function() {
        var r = confirm("confirm delete this video ");
        if (r == true) {
            var tmpuser = getCookie("inforlogin");
            var user = JSON.parse(tmpuser);
            var infoclip = {
                email: user.email,
                password: user.password,
                linkimg: linkimg
            };
            var jsoninfoclip = JSON.stringify(infoclip);
            deletevideoreques(jsoninfoclip);
            alert("deletevideo succesed ");
            window.location.href = "manage.html";
        }
    });
    imgob.setAttribute("src", urlimg);
    divimg.appendChild(imgob);
    liob.appendChild(divimg);
    liob.appendChild(spob);
    liob.appendChild(brob);
    liob.appendChild(viewstimeupob);
    liob.appendChild(delbuton);
    liob.appendChild(updatenamebuton);
    document.getElementById("idlist").appendChild(liob);

}
