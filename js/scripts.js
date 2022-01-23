// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });

//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });

//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
// });

// $(document).ready(function() {

//   $("div#click-one").click(function() {
//     const whatToSay = "Hello!";
//     alert(whatToSay);
//   });

//   $("div#click-two").click(function() {
//     alert(whatToSay);
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});