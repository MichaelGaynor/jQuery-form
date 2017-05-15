// Set up a doc read so nothing happens too early
$(document).ready(function(){
  // new jquery method...submit
  $(".form").submit(function(event){
    // console.log("Submitted");
  });
  $(".form").submit(function(event){
    event.preventDefault();
    // console.log("It stopped");
    $("input").each(function(){
      var currentInputTagClass = $(this).attr("class");
      // console.log(currentInputTagClass);
      // Target the corresponding error div for this input tag
      var errorDivClassName = "." +currentInputTagClass+ "-error";
      // console.log(errorDivClassName)
      // INPUT TAGS HAVE .val(), EVERYTHING ELSE HAS innerHTML
      if($(this).val() == ""){
        // console.log("User did not enter any information.");
        $(errorDivClassName).html("Field cannot be empty.");
      }
    })

    var password = $(".password").val();
    var password2 = $(".password2").val();
    var numberFound = false;
    for (let i=0; i<password.length; i++){
      if(isNaN(Number(password[i]))){
        continue;
      }else{
        numberFound = true;
      }
    }
    if (!numberFound){
      $(".password-error").html("Your password must contain a number")
    }
    if (password !== password2){
      $('.password-error').html("Your passwords do not match.")
    };
  });
});