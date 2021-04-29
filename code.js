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
        $("p").append(newSpan);
        num++;
    }
    $("p").append("<br>")
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

$("span.bone").on("click", function() {
   $(this).addClass("surprise");
});

$("span").on("click", function() {
    $(this).addClass("dug");
});

/*let changeSquare = $('#Brown');

changeSquare.on('click', function() {
    $(this).css({backgroundColor: 'brown'});
})
//Once the pristine yard has been constructed, hide your bones.

/*Repeat picking a random square and hiding a bone in it util you
have hidden num bones*/

/*When picking random squares to hide bones, if one already has
a bone in it pick again until an empty square is found to place the
bone*/

