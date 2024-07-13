let call1 = new Howl({
    src: ['audio1.ogg'],
    volume: 0.5,
    loop: false,
});

let call2 = new Howl({
    src: ['audio2.ogg'],
    volume: 0.5,
    loop: false,
});

let agent = 1402;

let callStatus = "ready";

$(".call-button").on("click", function() {
    if(agent === 1402 && callStatus !== "stop") {
        call1.play();
        $(this).removeClass("call-button_incoming");
        $(this).removeClass("call_1");
        $(this).addClass("call-button_stop");

        setTimeout(() => callStatus = "stop", 1000);
    }

    if(agent === 1707 && callStatus !== "stop") {
        call2.play();
        $(this).removeClass("call-button_incoming");
        $(this).removeClass("call_2");
        $(this).addClass("call-button_stop");

        setTimeout(() => callStatus = "stop", 1000);
    }

    if(callStatus === "stop") {
        $(".call").hide();
    }
})

$(".call-change").on("click", function () {
    $(".caller-name").text("Агент 1707");
    $(".spy-icon").attr("src", "spy1707.png");
    $(".call-button").addClass("call-button_incoming");
    $(".call-button").addClass("call_2");
    $(".call-button").removeClass("call-button_stop");
    $(".call").show();
    agent = 1707;
    callStatus = "ready";
    console.log(agent);
    console.log(callStatus);
})
