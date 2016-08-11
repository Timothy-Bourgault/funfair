$(document).ready(function() {

  // var age = parseInt(prompt("Enter your age, citizen."));

  $("form#heightCheck").submit(function(event) {
    var height = $("#myHeight").val();

    if (height >= 120) {
      $("#rideRC h4").addClass("rideSafe");
      $("#rideRC h5").text("You may enjoy this ride!");
    }
    else {
      $("#rideRC h4").addClass("rideUnsafe");
      $("#rideRC h5").text("This ride is not for you!");
    }

    if (height < 80 || height > 200) {
      $("#rideMG h4").addClass("rideUnsafe");
      $("#rideMG h5").text("This ride is not for you!");
    }
    else {
      $("#rideMG h4").addClass("rideSafe");
      $("#rideMG h5").text("You may enjoy this ride!");
    }

    if (height < 100 || height > 190) {
      $("#rideFW h4").addClass("rideUnsafe");
      $("#rideFW h5").text("This ride is not for you!");
    }
    else {
      $("#rideFW h4").addClass("rideSafe");
      $("#rideFW h5").text("You may enjoy this ride!");
    }

    if (height < 150 || height > 250) {
      $("#rideMD h4").addClass("rideUnsafe");
      $("#rideMD h5").text("This ride is not for you!");
    }
    else {
      $("#rideMD h4").addClass("rideSafe");
      $("#rideMD h5").text("You may enjoy this ride!");
    }

    if (height < 80 || height > 400) {
      $("#rideCC h4").addClass("rideUnsafe");
      $("#rideCC h5").text("This ride is not for you!");
    }
    else {
      $("#rideCC h4").addClass("rideSafe");
      $("#rideCC h5").text("You may enjoy this ride!");
    }

    if (height < 110 || height > 180) {
      $("#rideHC h4").addClass("rideUnsafe");
      $("#rideHC h5").text("This ride is not for you!");
    }
    else {
      $("#rideHC h4").addClass("rideSafe");
      $("#rideHC h5").text("You may enjoy this ride!");
    }

    event.preventDefault ();
  });


});
