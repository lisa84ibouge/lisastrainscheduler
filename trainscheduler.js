
  $(document).ready(function () {
    //your code here
  
    
  $('#submitButton').on("click", function (event){
        event.preventDefault();
        console.log("click")
        var trainName = $('#trainName').val().trim();
        var destination = $('#destination').val().trim();
        var firstTrain = $('#firstTrain').val().trim();
        var frequency = $('#frequency').val().trim();
        console.log(trainName, destination, firstTrain, frequency);

        var tr = $('<tr>');
        var td1 = $('<td>').html(trainName);
        var td2 = $('<td>').html(destination);
        var td3 = $('<td>').html(firstTrain);
        var td4 = $('<td>').html(frequency);

        tr.append(td1, td2, td3, td4);
        $('#trainBody').append(tr);
  })
 






});
