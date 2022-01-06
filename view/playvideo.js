////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////protype
class playerobject {
    constructor(namevideo, useup, timeup, views, category, linkimg) {
        this.name = namevideo;
        this.username = useup;
        this.timeup = timeup;
        this.views = views;
        this.category = category;
        this.linkimg = linkimg;
        this.nowindexplay = linkimg.length;
        this.playingok = false;
    }
    IsExistNext() {
        if (this.nowindexplay > 0) {
            --this.nowindexplay;
            return true;

        } else {
            return false;
        }
    }
    SetFalsePlaying() {
        this.playingok = false;
    }
    SetTruePlaying() {
        this.playingok = true;
    }
    IsPlaying() {
        return this.playingok;
    }
    setnextvideo() {
        var tmp = "../control/uploads/video/" + this.linkimg[this.nowindexplay];
        var urlvideo = tmp.replace(".jpg", ".mp4");
        var infoclip = {
            name: this.name[this.nowindexplay],
            username: this.username[this.nowindexplay],
            timeup: this.timeup[this.nowindexplay],
            views: this.views[this.nowindexplay],
            category: this.category[this.nowindexplay],
            linkimg: this.linkimg[this.nowindexplay],
            urlvideo: urlvideo
        };
        this.playingok = false;
        //this.nowindexplay=this.nowindexplay-1;
        //console.log(infoclip);
        var jsoninfoclip = JSON.stringify(infoclip);
        setCookie("infovideo", jsoninfoclip, 30);
    }

}
var myplayer;

function initmyplayer(namevideo, useup, timeup, views, category, linkimg) {
    myplayer = new playerobject(namevideo, useup, timeup, views, category, linkimg);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function firstload() {
    setvaluebutoninout();
    autoplayvideo();
    setdomainsearch();
    var videoob = JSON.parse(getCookie("infovideo"));
    getsuggestionvideo(videoob.category, videoob.name, initmyplayer);
    //getlistcomment();
}

function addviewsvideo(linkimg) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xmlhttp.open("POST", "../control/updateview.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + linkimg);
    return xmlhttp.onreadystatechange;
}

function getsuggestionvideo(category, namevideonow, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var resultar = JSON.parse(this.responseText);
            for (var i = resultar.linkimg.length - 1; i >= 0; i--) {
                if (namevideonow != resultar.namevd[i]) {
                    addanimagesg(resultar.linkimg[i], resultar.namevd[i], resultar.userup[i], resultar.timeup[i], resultar.views[i], resultar.category[i]);
                }
            }
            callback(resultar.namevd, resultar.userup, resultar.timeup, resultar.views, resultar.category, resultar.linkimg);
        }
    };
    xmlhttp.open("POST", "../control/getobsgimg.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + category);
    return xmlhttp.onreadystatechange;
}
async function autoplaynextvideo() {
    //console.log(myplayer);
    if (await myplayer.IsExistNext() == true) {
        //alert("van con video");
        if (myplayer.IsPlaying() == true) {
            await myplayer.setnextvideo();
        }
        await autoplayvideo();
        await myplayer.SetTruePlaying();
    } else {
        //alert("het danh sach phat video");
    }
}

function autoplayvideo() {
    var videoob = JSON.parse(getCookie("infovideo"));
    addviewsvideo(videoob.linkimg);
    getlistcomment();
    if (getCookie("infovideo") != "") {
        var video = document.querySelector("#video-element");
        document.querySelector("#video-element source").setAttribute('src', videoob.urlvideo);
        video.load();
        //video.play();
        var playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(function tmp() {
                // Automatic playback started!
                // Show playing UI.
                video.addEventListener("ended", function() {
                    //alert("video has ended");
                    autoplaynextvideo();
                })
            }).catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.log("deo play video dau con haha ");
            });
        }
        document.getElementById("namevideo").innerHTML = videoob.name;
        document.getElementById("viewstimeup").innerHTML = videoob.views + " views-" + videoob.timeup;
        document.getElementById("account").innerHTML = videoob.username;

    } else {
        alert("orrcured an error !!!! may cookie is not set before come here ");
    }
}

function addanimagesg(linkimg, name, username, timeup, views, category) {
    var urlimg = "../control/uploads/image/" + linkimg;
    var tmp = "../control/uploads/video/" + linkimg;
    var urlvideo = tmp.replace(".jpg", ".mp4");
    var divrow = document.createElement("DIV");
    divrow.classList.add("row");
    var divcola = document.createElement("DIV");
    divcola.classList.add("col-6");
    var divcolb = document.createElement("DIV");
    divcolb.classList.add("col-6");
    var imgob = document.createElement("IMG");
    var dtob = document.createElement("DT");

    var namesg = document.createElement("P");
    var useob = document.createElement("P");
    var viewandtime = document.createElement("P");
    var divifob = document.createElement("DIV");
    dtob.classList.add("dtsgvideo");
    divifob.classList.add("ifsgimg");
    namesg.classList.add("ifsgname");
    viewandtime.classList.add("ifsgviewstimeup");
    useob.classList.add("ifsguser");
    namesg.innerHTML = name;
    useob.innerHTML = username;
    viewandtime.innerHTML = views + " views-" + timeup;
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
    imgob.classList.add("sgimg");
    imgob.setAttribute("src", urlimg);
    divcola.appendChild(imgob);
    divifob.appendChild(namesg);
    divifob.appendChild(viewandtime);
    divifob.appendChild(useob);
    divcolb.appendChild(divifob);
    divrow.appendChild(divcola);
    divrow.appendChild(divcolb);
    dtob.appendChild(divrow);
    document.getElementById("sglist").appendChild(dtob);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*document.getElementById("idinputcomment").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("idsenticon").click();
    }
});
*/
async function insertcommentreques(formattedFormData) {
    const response = await fetch('../control/insertcomment.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}

function getlistcomment() {
    deleteallChild();
    var videoob = JSON.parse(getCookie("infovideo"));
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var resultar = JSON.parse(this.responseText);
            //console.log(resultar);
            for (var i = resultar.linkimg.length - 1; i >= 0; i--) {
                addanitemcomment(resultar.idcomment[i], resultar.content[i], resultar.email[i], resultar.timeup[i]);
            }
        }
    };
    xmlhttp.open("POST", "../control/getlistcomment.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + videoob.linkimg);
    return xmlhttp.onreadystatechange;
}
async function deletecommentreques(formattedFormData) {
    const response = await fetch('../control/deletecomment.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}
async function updatecommentreques(formattedFormData) {

    const response = await fetch('../control/updatecomment.php', {
        method: 'POST',
        body: JSON.stringify(formattedFormData)
    });
    const data = await response.text();
    //console.log(data);
    return data;
}

function addanitemcomment(id, content, username, timeup) {

    var liob = document.createElement("DT");
    var spob = document.createElement("SPAN");
    var timeupob = document.createElement("SPAN");
    var contentob = document.createElement("SPAN");
    var brob = document.createElement("BR");

    liob.classList.add("dtcomment");
    spob.classList.add("usernamecomment");
    timeupob.classList.add("timeupcomment");
    contentob.classList.add("contentcomment");

    spob.innerHTML = username;
    timeupob.innerHTML = timeup + " : ";
    contentob.innerHTML = content;
    liob.appendChild(spob);

    var tmpuser = getCookie("inforlogin");
    if (tmpuser != "") {
        var user = JSON.parse(tmpuser);
        if (user.email == username) {
            var divbutoncommentob = document.createElement("DIV");
            var delbutonob = document.createElement("BUTTON");
            var editbutonob = document.createElement("BUTTON");
            divbutoncommentob.classList.add("divbutoncomment");
            delbutonob.classList.add("delbutoncomment");
            editbutonob.classList.add("editbutoncomment");
            delbutonob.innerHTML = "delete";
            editbutonob.innerHTML = "edit";
            editbutonob.addEventListener("click", function() {
                var newcomment = prompt("Edit your comment here:", content);
                if (newcomment == null || newcomment == "" || newcomment == content) {
                    alert("update comment failse, form is empty or nothing change");
                } else {
                    //alert("new name is :"+newname);
                    contentob.innerHTML = newcomment;
                    content = newcomment;
                    var tmpuser = getCookie("inforlogin");
                    var user = JSON.parse(tmpuser);
                    var infocomment = {
                        email: user.email,
                        password: user.password,
                        newcomment: newcomment,
                        id: id
                    };
                    //console.log("update comment is :" + jsoninfocomment);
                    updatecommentreques(infocomment);
                }
            });
            delbutonob.addEventListener("click", function() {
                var r = confirm("confirm delete this comment ");
                if (r == true) {
                    liob.remove();
                    var tmpuser = getCookie("inforlogin");
                    var user = JSON.parse(tmpuser);
                    var infocomment = {
                        email: user.email,
                        password: user.password,
                        id: id
                    };
                    //console.log("delcomment is :" + jsoninfocomment);
                    deletecommentreques(infocomment);

                }
            });
            divbutoncommentob.appendChild(delbutonob);
            divbutoncommentob.appendChild(editbutonob);
            liob.appendChild(divbutoncommentob);
        }

    }
    liob.appendChild(brob);
    liob.appendChild(timeupob);
    liob.appendChild(contentob);
    document.getElementById("commentlist").appendChild(liob);
}

function deleteallChild() {
    var e = document.querySelector("#commentlist");

    //e.firstElementChild can be used. 
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
async function sentcomment() {
    var tmpuser = getCookie("inforlogin");
    if (tmpuser == "") {
        var r = confirm("You have to login  to use this feature, do you want to continue ?");
        if (r == true) {
            window.location.href = "login.html";
        }
    } else {
        var videoob = JSON.parse(getCookie("infovideo"));
        var tmptime = new Date();
        //console.log("tmp time is "+tmptime);
        var timeup = tmptime.toString().substring(4, 24);
        var content = document.getElementById("idinputcomment").value;
        var user = JSON.parse(tmpuser);
        if (content != "") {
            var infocomment = {
                username: user.name,
                email: user.email,
                password: user.password,
                content: content,
                timeup: timeup,
                linkimg: videoob.linkimg
            };
            await insertcommentreques(infocomment);
            //document.getElementById("commentlist").innerHTML = "";
            await deleteallChild();
            await getlistcomment();
            document.getElementById("idinputcomment").value = "";
            //console.log("infor comment is :" + jsoninfocomment);

        } else {
            alert("please enter content to commemt !!!! ");
        }
    }

}