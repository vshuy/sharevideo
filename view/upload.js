function iniavata() {
    //console.log("ran in set default avata");
    var canvas = document.getElementById('canvas');
    //Get a 2D drawing context for the canvas.
    var context = canvas.getContext('2d');
    //The path to the image that we want to add.
    //var imgPath = 'img/tbn.jpeg';
    var imgPath = 'img/setavata.jpeg';
    //Create a new Image object.
    var imgObj = new Image();
    //Set the src of this Image object.
    imgObj.src = imgPath;
    imgObj.onload = function() {
        context.drawImage(imgObj, 0, 0, 426, 240);
    }

}

function autoplayvideo() {
    var video = document.querySelector("#video-element");
    //console.log("runing in fuction autoplay video");
    document.querySelector("#video-element source").setAttribute('src', URL.createObjectURL(document.querySelector("#file-input").files[0]));
    video.load();
    video.style.display = 'inline';
    video.play();
    setTimeout(function() {
        document.getElementById('butoncapture').click();
    }, 500);

}

function capture() {
    //console.log("load image");
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video-element');
    // canvas.width = 640;
    // canvas.height = 360;
    // canvas.getContext('2d').drawImage(video, 0, 0, 640, 360);
    canvas.width = 426;
    canvas.height = 240;
    canvas.getContext('2d').drawImage(video, 0, 0, 426, 240);
}

document.querySelector("#file-input").addEventListener('change', function() {
    // console.log("file has changed");
    if (['video/mp4'].indexOf(document.querySelector("#file-input").files[0].type) == -1) {
        //check is file mp4
        alert('Error : Only MP4 format allowed');
        return;
    } else {
        iniavata();
        autoplayvideo();
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector("#confirm").addEventListener('click', function() {
    //console.log("user has clicked");
    if (document.querySelector('#file-input').files.length == 0) {
        //check is file to upload exist
        alert("please choice a file to upload ");
        console.log("no fie was choice");
        return;
    }
    if (['video/mp4'].indexOf(document.querySelector("#file-input").files[0].type) == -1) {
        //check is file mp4
        alert('Error : Only MP4 format allowed');
        return;
    }
    var file = document.querySelector('#file-input').files[0];
    //console.log("You have chosen the file " + file.name);
    //////source file one
    var canvasData = canvas.toDataURL("image/png");
    /////////////////source file two
    var user = JSON.parse(getCookie("inforlogin"));
    /////////////////source file three
    var videoname = document.getElementById("idnamevideo").value;
    //source file four
    var tmptime = new Date();
    //source file five
    var timeup = tmptime.toString().substring(4, 15);
    //source file six
    var category = document.getElementById("myCategory").value;
    if (videoname != "") {

        //console.log(user.email);
        //console.log(user.password);

        var inforupload = {
            user: user.email,
            timeup: timeup,
            category: category,
            videoname: videoname
        };
        //console.log(inforupload);
        var jsonupdata = JSON.stringify(inforupload);
        //console.log(jsonupdata);
        //console.log(videoname);

        var data = new FormData();
        data.append('fileToUpload', file);
        data.append('fileImageUpload', canvasData);
        data.append('fileInfo', jsonupdata);
        var request = new XMLHttpRequest();
        request.open("POST", '../control/allup.php', true);
        //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); some thing error if you allow this line
        request.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
                console.log(this.responseText);
                if (Number(this.responseText) == 3) {
                    alert("upload file succeed ");
                    window.location.href = "../";
                } else {
                    alert("failse to upload this file");
                }
            }
        };
        request.send(data);
    } else {
        alert("please enter videoname to upload ");
        console.log("please enter videoname");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////