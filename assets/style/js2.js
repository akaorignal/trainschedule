/* global firebase moment */
// Steps to complete:
// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed
// 1. Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA60MembcRM6QSMba-4Fmw1H___ZAygBgw",
    authDomain: "train-4ef14.firebaseapp.com",
    databaseURL: "https://train-4ef14.firebaseio.com",
    projectId: "train-4ef14",
    storageBucket: "train-4ef14.appspot.com",
    messagingSenderId: "173733516197"
  };
  firebase.initializeApp(config);
  var database = firebase.database();



// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  // Grabs user input
  var trnName = $("#train-name-input").val().trim();
  var trnDest = $("#dest-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var freq = $("#freq-input").val().trim();
  // Creates local "temporary" object for holding employee data
  var newTrn = {
    name: trnName,
    role: trnDest,
    start: empStart,
    freq: freq
  };
  // Uploads employee data to the database
  database.ref().push(newTrn);
  // Logs everything to console
  console.log(newTrn.name);
  console.log(newTrn.role);
  console.log(newTrn.start);
  console.log(newTrn.freq);
  // Alert
  alert("train successfully added");
  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#dest-input").val("");
  $("#start-input").val("");
  $("#freq-input").val("");
});
// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Store everything into a variable.
  var trnName = childSnapshot.val().name;
  var trnDest = childSnapshot.val().role;
  var empStart = childSnapshot.val().start;
  var freq = childSnapshot.val().freq;
  // Employee Info
  console.log(trnName);
  console.log(trnDest);
  console.log(empStart);
  console.log(freq);

  /*
  // Prettify the employee start
  var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  console.log(empMonths);
  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);
  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});*/
// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016
// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case\

