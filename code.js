//create a constant named NUM_Bones
const NUM_BONES = 5;
let num = 0;
/*Create a NUM_Bones by NUM_Bones grid of lawn squares
  Squares start out as green when they have not been dug up*/
for(let row = 0; row < NUM_BONES; row++)
{
    for(let col = 0; col < NUM_BONES; col++)
    {
        let newSpan = $("<span>");
        newSpan.attr("id", num);
        $("p#yard").append(newSpan);
        num++;
    }
    $("p#yard").append("<br>")
}
for (let i = 0; i < NUM_BONES; i++) {
    let n = Math.trunc(Math.random() * (num));
    console.log(n);
    while ($("span#" + n).hasClass("bone"))
    {
        //re-roll
        n = Math.trunc(Math.random() * (num));
        console.log("re-roll: " + n);
    }
    $("span#" + n).addClass("bone");
}
let clicked_bones = 0;
let gauge_value = 0.0;


$("span.bone").on("click", function() {
    let niceGreeting = "You have found all of the bones, good doggo!";
   $(this).addClass("surprise");
    clicked_bones++;
    if (clicked_bones >= NUM_BONES) {
        console.log(niceGreeting)
        $("span").off("click");
        $("#output").text(`${niceGreeting}`);
        $(".output").show();
    }
});



$("span").on("click", function() {
    $(this).addClass("dug");
    $(this).off();
    let min = 1/(NUM_BONES * NUM_BONES);
    let max = 4/(NUM_BONES * NUM_BONES);
    let diff = max - min;
    let randnum = Math.random() * diff + min;
    gauge_value += randnum;
    setGaugeValue(gaugeElement, gauge_value);
    if (gauge_value >= 1) {
        let sadGreeting = "Oh no! Too many holes!";
        console.log(sadGreeting);
        $("span").off("click");
        $("#output").text(`${sadGreeting}`);
        $(".output").show();
    }
});

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
    if (value > 1) {
        value = 1;
    }
    if (value < 0 || value > 1) {
        return;
    }
    gauge.querySelector(".gauge_fill").style.transform = `rotate(${
        value / 2
    }turn)`;
    gauge.querySelector(".gauge_cover").textContent = `${Math.round(
        value * 100
    )}%`;
}
setGaugeValue(gaugeElement, gauge_value);








