
//   var config = {
//     apiKey: "AIzaSyDtAYLv0z7YNeeBz10AkR0TaZ9ixQZfQYU",
//     authDomain: "trainschedulerapp-3d9f9.firebaseapp.com",
//     databaseURL: "https://trainschedulerapp-3d9f9.firebaseio.com",
//     projectId: "trainschedulerapp-3d9f9",
//     storageBucket: "trainschedulerapp-3d9f9.appspot.com",
//     messagingSenderId: "1015683100147"
//   };
//   firebase.initializeApp(config);

//  var database = firebase.database();

$(document).ready(function () {
    //your code here
  
  

  $('#submitButton').on("click", function (event){
        event.preventDefault();
        console.log("click")
        var trainName = $('#trainName').val.trim();
        var destination = $('#destination').val.trim();
        var firstTrain = $('#firstTrain').val.trim();
        var frequency = $('#frequency').val.trim();
        console.log(trainName, destination, firstTrain, frequency);
  })
});