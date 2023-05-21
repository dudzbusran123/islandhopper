<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

 $servername = "localhost";
 $username = "root";
 $password = "";
 $dbname = "costumerinfodb";

// // Create connection
 $conn = mysqli_connect($servername, $username, $password, $dbname);





if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  else{
    echo "Connected successfully";
  }
  

//Assigning Values
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $middleName = $_POST['middleName'];
  $gender = $_POST['gender'];
  $nationality = $_POST['citizen'];
  $birthdate = $_POST['birthDate'];
  $religion = $_POST['religion'];
  $status = $_POST['status'];
  $address = $_POST['address'];
  $from = $_POST['from'];
  $zipcode = $_POST['zipCode'];
  $emerHolderName = $_POST['emerHolderName'];
  $emerHolderNumber = $_POST['emerHolderNumber'];
  $moblie = $_POST['mobile'];
  $email = $_POST['email'];
  $accomodation = $_POST['accomodation'];
  $goingTo = $_POST['goingTo'];

  $response = array('message' => 'Data saved successfully');
  echo json_encode($response);



//Inserting to the database

$stmt = $conn->prepare("INSERT INTO usertb  (firstName,lastName,middleName,gender,nationality,birthDate,religion,status, address,fromdestination,toDestination,zipCode,emerHoldName,emerHoldNumber, mobilenumber,email,accomodation ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

if (!$stmt) {
    echo "Prepare failed: (" . $conn->errno . ") " . $conn->error;
} else {
    $stmt->bind_param("sssssssssssssssss", $firstName,$lastName,$middleName,$gender,$nationality,$birthdate,$religion,$status,$address,$from,$goingTo,$zipcode,$emerHolderName,$emerHolderNumber,$moblie,$email,$accomodation);
    $stmt->execute();
    // ...
}

echo "<pre>";
print_r($_POST);
echo "</pre>";

if ($stmt !== false) { // Check if $stmt is not false
  $stmt->close(); // Close the statement
}
$conn->close();

// header('Location: paywaller');
// exit;


?>