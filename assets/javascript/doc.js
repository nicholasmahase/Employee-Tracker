// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMoKdgeqERluBt-BOlC1Q2XI69DmQE_ww",
    authDomain: "employeetrackerproject-3461b.firebaseapp.com",
    databaseURL: "https://employeetrackerproject-3461b.firebaseio.com",
    projectId: "employeetrackerproject-3461b",
    storageBucket: "employeetrackerproject-3461b.appspot.com",
    messagingSenderId: "710757171101"
  };
  
  firebase.initializeApp(config);
  
  // Create a variable to reference the database
  var database = firebase.database();

 

  // snapshot of data to send to firebase
    $("#submit").on("click", function(event){
        event.preventDefault();
        //Inital Value

  var name = $("#name-input").val().trim();
  var role = $("#role-input").val().trim();
  var date = $("#date-input").val().trim();
  var worked = "";
  var rate = parseInt($("#monthly-rate-input").val().trim());
  var total = "";

  console.log(name, role, date,rate);

  database.ref("formInfo").push({
      name: name,
      role: role,
      date: date,
      rate: rate
  })


});

         // The createRow function takes data returned form and appends the table data to the tbody
 database.ref("formInfo").on("child_added",function(childSnapshot) {
     var now = moment();
     var prevDate = moment(childSnapshot.val().date);
    var employeeData = "<tr>";
    employeeData += "<td>" + childSnapshot.val().name + "</td>";
    employeeData += "<td>" + childSnapshot.val().role + "</td>";
    employeeData += "<td>" + childSnapshot.val().date + "</td>";
    employeeData += "<td>" + now.diff(prevDate, 'months') +"</td>";
    employeeData += "<td>" + childSnapshot.val().rate + "</td>";
    employeeData += "<td></td>";
    employeeData += "</tr>";

    $('tbody').append(employeeData);
 });



    
        


