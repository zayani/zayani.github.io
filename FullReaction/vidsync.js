//log
console.log("vidsync.js loaded");



let videoReactDelay = 1e7;

//set videoReact delay
let setDelay = delay => {
    videoReactDelay = delay;
    //set #delay to mm:ss
    $("#delay").text(secondsToTime(delay, 10));
    trytoSync();
}


//convert srt to webvtt
let srt2webvtt = srt => {

    let webvttArr = ["WEBVTT Kind: captions; Language: en"];

    let lines = srt.split("\n");


    let i = 0;
    while (i < lines.length) {

        //check line is not empty or not undefined
        //and next line don't contains '-->'
        if (lines[i] && lines[i].trim() &&
            (!lines[i + 1] || lines[i + 1].indexOf("-->") == -1)) {

            //check if it's time line
            if (lines[i].indexOf("-->") != -1) {
                //push empth line 
                webvttArr.push("");

                //replace all ',' with '.'
                lines[i] = lines[i].replaceAll(",", ".");

            }

            //push line to webvttArr
            webvttArr.push(lines[i].trim());
        }

        i++;
    }

    console.log(webvttArr);

    return webvttArr.join("\n");
};

//select video for videoX
let selectVideo = (videoX, callBack) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        let files = Array.from(input.files);
        console.log(files);
        //set videoReact src to file
        $(videoX).attr("src", URL.createObjectURL(files[0]));



        //load videoReact
        $(videoX)[0].load();

        //set page title to file name
        document.title = files[0].name;

        callBack && callBack(files[0])
    };
    input.click();
}

//#addSubBtn click event
$("#addSubBtn").click(e => {
    //get srt file 
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        //get the file from input
        let files = Array.from(input.files);
        //get the file text
        let file = files[0];
        let reader = new FileReader();
        reader.onload = e => {
            //get the file text
            let fileText = e.target.result;
            //convert srt to webvtt
            let webvtt = srt2webvtt(fileText);

            //add webvtt to videoReact as track
            $("#videoBase").append(
                `<track src="data:text/vtt;base64,${
                //btoa(webvtt)
                btoa(unescape(encodeURIComponent(webvtt)))

                }" 
        kind="captions" srclang="en" label="English" default>`
            );

        }
        reader.readAsText(file);

        let name = file.name.split(".");

        name.pop();
        name = name.pop() || name[0] || "subtitles";

        $('#addSub').text(name);
    };
    input.click();
    document.activeElement && document.activeElement.blur();

});



//make video 2 draggable
$("#videoReact").draggable({ containment: "parent" });




$('#addBaseVide').click(e => selectVideo("#videoBase"));

$('#addReactVid').click(e => selectVideo("#videoReact",
    file => {
        //split file name to tokens
        let tokens = file.name.split(".");

        //find a number token
        let num = tokens.find(token =>
            token.split("dt")[0] == "" && !isNaN(token.split("dt")[1]));

        if (num) {
            num = num.split("dt")[1];
            //set videoReact delay to number token
            setDelay(Number(num) / 10);
        }
    }));


//play/pause videos
let playPause = e => {
    //play/pause videoBase
    if ($("#videoReact")[0].paused) {

        $("#videoReact")[0].play();
        $("#videoBase")[0].currentTime = $("#videoReact")[0].currentTime - videoReactDelay;
    } else {

        $("#videoReact")[0].pause();
        $("#videoBase")[0].currentTime = $("#videoReact")[0].currentTime - videoReactDelay;
    }
    ;


    document.activeElement && document.activeElement.blur();
}

//play/pause on click videoa on click
$("#videoBase").click(playPause);
$('#videoReact').click(playPause);






let lastSync = Date.now();


//on document keydown
$(document).keydown(e => {

    //when space is pressed
    if (e.keyCode == 32) playPause();


    //when up arrow is pressed
    if (e.keyCode == 38) {
        //increase videoReactDelay by 0.1
        setDelay(videoReactDelay + 0.1);
    }

    //when down arrow is pressed
    if (e.keyCode == 40) {
        //decrease videoReactDelay by 0.1
        setDelay(videoReactDelay - 0.1);
    }

    //when page up is pressed
    if (e.keyCode == 33) {
        //increase videoReactDelay by 1
        setDelay(videoReactDelay + 1);
    }

    //when page down is pressed
    if (e.keyCode == 34) {
        //decrease videoReactDelay by 1
        setDelay(videoReactDelay - 1);
    }

    //when number keys are pressed
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
        //get the number key pressed
        let num = e.keyCode - (e.keyCode >= 96 ? 96 : 48);


        let seektime = (num / 10) * $("#videoBase")[0].duration;
        //jump to that time in videoReact
        $("#videoReact")[0].currentTime = seektime;
        $("#videoBase")[0].currentTime = seektime - videoReactDelay;
    }

    //when 'S' is pressed
    if (e.keyCode == 83) {
        //sync videoReact and videoBase
        setDelay($("#videoReact")[0].currentTime);
    }


    //when left arrow is pressed
    if (e.keyCode == 37) {
        //decrease videos currentTime by 5 seconds
        $("#videoReact")[0].currentTime -= 5;
        $("#videoBase")[0].currentTime -= 5;
    }

    //when right arrow is pressed
    if (e.keyCode == 39) {
        //increase videos currentTime by 5 seconds
        $("#videoReact")[0].currentTime += 5;
        $("#videoBase")[0].currentTime += 5;
    }

    //when home is pressed
    if (e.keyCode == 36) {
        //set videos to videoReactDelay
        $("#videoReact")[0].currentTime = videoReactDelay;
        $("#videoBase")[0].currentTime = 0;
    }

});




let trytoSync = e => {


    //check that both videos have a src
    if (!$("#videoBase").attr("src") || !$("#videoReact").attr("src")
        || videoReactDelay > 1e6) return;


    //videoBase current time



    let videoReactCT = $("#videoReact")[0].currentTime;
    let videoBaseCT = $("#videoBase")[0].currentTime;
    //chck the difference between videoReact and videoBase playtime
    let diff = Math.abs(videoReactCT - (videoBaseCT + videoReactDelay));

    //play #videoBase if paused
    if (!$("#videoReact")[0].paused && $("#videoBase")[0].paused &&
        (videoReactCT - videoReactDelay) >= 0
    ) {
        console.log("videoBase resumed");
        $("#videoBase")[0].play();
    }
    else if (
        $("#videoReact")[0].paused
        || (videoReactCT - videoReactDelay) < 0
    ) {
        //set videoReact current time to 0
        $("#videoBase")[0].currentTime = $("#videoReact")[0].currentTime - videoReactDelay;
        $("#videoBase")[0].pause();
    }



    //console.log("videoReact & videoBase time diff", diff);

    //if difference is greater than x seconds
    if (diff > 0.25) {

        //check if videoBase current time is greater than videoReact length
        if ((videoBaseCT + videoReactDelay) > $("#videoBase")[0].duration) {
            //set videoReact to the end
            $("#videoBase")[0].currentTime = $("#videoBase")[0].duration;


        } else {
            //syn videoReact to videoBase

            //console.log("syn videoReact to videoBase");
            $("#videoBase")[0].currentTime = $("#videoReact")[0].currentTime - videoReactDelay;
            lastSync = Date.now();
        }


    }

    //diff between video duration and videoBase current time
    let diff2 = Math.abs($("#videoBase")[0].duration - videoBaseCT);




}

//check when videoBase play time changes
$("#videoReact").on("timeupdate", trytoSync);




//on videoBase pause
$("#videoReact").on("pause", e => {
    //pause videoReact
    $("#videoBase")[0].pause();
});

//funcation to convert seconds to time
let secondsToTime = (seconds, prec = 1) => {

    if (!seconds) return "0:00";

    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor((seconds % 3600 % 60) * prec) / prec;

    return (h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "0:") + (s < 10 ? "0" : "") + s;
}



//on video 2 loadedmetadata
$("#videoReact").on("loadedmetadata", e => {
    //set #timeRange max to video duration
    $("#timeRange").attr("max", $("#videoReact")[0].duration);
});

//on #timeRange change
$("#timeRange").on("change", e => {
    // console.log("timeRange changed");
    //set videoBase current time to timeRange value
    $("#videoReact")[0].currentTime = $("#timeRange").val();

    document.activeElement && document.activeElement.blur();
});

let timeRangeDisabled = false;

//on #timeRange mousedown
$("#timeRange").on("mousedown", e => {
    timeRangeDisabled = true;
});

let onAnimationFrame = e => {


    trytoSync();

    let timer = `${secondsToTime($("#videoReact")[0].currentTime)
        } / ${secondsToTime($("#videoReact")[0].duration)
        }`;

    let timer2 = `${secondsToTime($("#videoBase")[0].currentTime)
        } / ${secondsToTime($("#videoBase")[0].duration)
        }`;


    //update timer video label if the video src is set
    if (timer != $("#timer").text()
        && $("#videoReact").attr("src")
    ) $("#timer").text(timer);

    if (timer2 != $("#timer2").text()
        && $("#videoBase").attr("src")
    ) $("#timer2").text(timer2);

    //update timeRange value
    if ($("#timeRange").val() != $("#videoReact")[0].currentTime && !timeRangeDisabled) {
        // console.log("timeRange updated");

        $("#timeRange").val($("#videoReact")[0].currentTime);

        timeRangeDisabled = false;

    }

    requestAnimationFrame(onAnimationFrame);
};


let videoReactHeightIndex = 0;

//#timer on click
$("#timer").click(e => {
    //if react video is not loaded return
    if (!$("#videoReact").attr("src")) return;

    //rsize videoReact height
    videoReactHeightIndex =
        (videoReactHeightIndex + 1) % 5;


    //conver if else to switch
    switch (videoReactHeightIndex) {
        case 0: { $("#videoReact").css("height", "auto").css("object-position", "") } break;
        case 1: { $("#videoReact").css("height", 9 / 24 * $("#videoReact").width() + "px").css("object-position", "top 25% left 0") } break;
        case 2: { $("#videoReact").css("height", 9 / 24 * $("#videoReact").width() + "px").css("object-position", "") } break;
        case 3: { $("#videoReact").css("height", 9 / 24 * $("#videoReact").width() + "px").css("object-position", "bottom 25% left 0") } break;
        case 4: { $("#videoReact").css("height", 9 / 21 * $("#videoReact").width() + "px").css("object-position", "") } break;

    }



});




// #BaseVol control volume of videoReact
$("#BaseVol").on("change", e => {
    $("#videoBase")[0].volume = $("#BaseVol").val();
    document.activeElement && document.activeElement.blur();
});

// #ReactVol control volume of videoBase
$("#ReactVol").on("change", e => {
    $("#videoReact")[0].volume = $("#ReactVol").val();
    document.activeElement && document.activeElement.blur();
});

//check when both videos are loaded
$("#videoReact, #videoBase").on("loadedmetadata", e => {

    //chck if both videos have a src
    if ($("#videoReact").attr("src") && $("#videoBase").attr("src")) {
        //remove #tipsScreen
        $("#tipsScreen").remove();
    }

});

//on #timeRange hover
$("#timeRange").on("mouseenter", e => {


    //find the width of the timeRange
    let w = $("#timeRange").width();

    //find the x position of the mouse
    let mx = e.clientX - $("#timeRange").offset().left;

    //find timeRange max
    let max = $("#timeRange").attr("max");


    //set #timeRange title 
    $("#timeRange").attr("title", ` ${secondsToTime((mx / w) * max)} `);


});

onAnimationFrame();