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
    };
    xmlhttp.open("POST", "../control/manage.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + email);
    return xmlhttp.onreadystatechange;
}
async function updatenamevideorequest(formattedFormData) {
    const response = await fetch('../control/updatename.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}
async function deletevideorequest(formattedFormData) {
    const response = await fetch('../control/deletevideo.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}

function deletevideoprocess(video) {
    deletevideorequest(video);
}

function updatenamevideoprocess(video) {
    updatenamevideorequest(video);
}

function addanimagejs(linkimg, name, username, timeup, views, category) {
    var urlimg = "../control/uploads/image/" + linkimg;
    var tmp = "../control/uploads/video/" + linkimg;
    var urlvideo = tmp.replace(".png", ".mp4");
    var imgob = document.createElement("IMG");
    var divob = document.createElement("DIV");
    var divimg = document.createElement("DIV");
    var spob = document.createElement("SPAN");

    var viewstimeupob = document.createElement("SPAN");
    var delbuton = document.createElement("BUTTON");
    var updatenamebuton = document.createElement("BUTTON");
    delbuton.innerHTML = "DELETE THIS VIDEO";
    updatenamebuton.innerHTML = "RENAME";
    imgob.classList.add("imgoflist");
    divob.classList.add("col-md-4");
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
            updatenamevideoprocess(infoclip);
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
            deletevideoprocess(infoclip);
            alert("deletevideo succesed ");
            window.location.href = "manage.html";
        }
    });
    imgob.setAttribute("src", urlimg);
    divimg.appendChild(imgob);
    divob.appendChild(divimg);
    divob.appendChild(spob);
    divob.appendChild(brob);
    divob.appendChild(viewstimeupob);
    divob.appendChild(delbuton);
    divob.appendChild(updatenamebuton);
    document.getElementById("idlist").appendChild(divob);

}