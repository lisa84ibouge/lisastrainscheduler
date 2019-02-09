  $(document).ready(function () {
    //your code here
    
    var trainCount = firebase.database().ref('trains/');
    trainCount.on('value', function(snapshot) {
      var val = snapshot.val();
      for (var key in val){
        var trainName = val[key].trainName;
        var destination = val[key].destination;
        var frequency = val[key].frequency;
        var firstTrain = val[key].firstTrain;
        var nextTrain = moment(firstTrain);
        while (nextTrain.isBefore(moment())) {
            nextTrain = nextTrain.add(parseInt(frequency), 'minutes');
          
        }
        console.log(nextTrain);


        var timeRemaining = moment().diff(nextTrain);

        var tr = $('<tr>');
        var td1 = $('<td>').html(trainName);
        var td2 = $('<td>').html(destination);
        var td3 = $('<td>').html(frequency);
        var td4 = $('<td>').html(nextTrain.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        var td5 = $('<td>').html(nextTrain.fromNow());

        tr.append(td1, td2, td3, td4, td5);
        $('#trainBody').append(tr);
        
      }
   // trainCount(trainName, snapshot.val());
    console.log(snapshot.val());

});

    
  $('#submitButton').on("click", function (event){
        event.preventDefault();
        console.log("click")
        var trainName = $('#trainName').val().trim();
        if (trainName.length == 0) {
        return;
        }
        var destination = $('#destination').val().trim();
        var firstTrain = $('#firstTrain').val().trim();
        var frequency = $('#frequency').val().trim();
        console.log(trainName, destination, firstTrain, frequency);
        $('#trainBody').html("");
        firebase.database().ref('trains/' + encodeURIComponent(trainName)).set({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
      });



      /* var nextTrain = moment(firstTrain);
        while (nextTrain.isBefore(moment())) {
            nextTrain = nextTrain.add(parseInt(frequency), 'minutes');
          
        }
        console.log(nextTrain);


        var timeRemaining = moment().diff(nextTrain);

        var tr = $('<tr>');
        var td1 = $('<td>').html(trainName);
        var td2 = $('<td>').html(destination);
        var td3 = $('<td>').html(frequency);
        var td4 = $('<td>').html(nextTrain.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        var td5 = $('<td>').html(nextTrain.fromNow());

        tr.append(td1, td2, td3, td4, td5);
        $('#trainBody').append(tr);

      */
  })
 

        



});
