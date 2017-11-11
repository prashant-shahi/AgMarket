<!DOCTYPE html>
<html>
<head>
 <title>Login Form with Glass Effect</title>
 <style type="text/css">
 body{
  background-image: url('ffm.jpg');
  background-size: cover;
 }
 .aa{
  width: 400px;
  height: 380px;
  background-color: rgba(0,0,0,0.5);
  margin-top: 200px;
  margin-left: 150px;
  padding-top: 30px;
  padding-left: 50px;
  -webkit-border-color: 15px;
  -moz-border-color: 15px;
  -ms-border-color: 15px;
  -o-border-color: 15px;
  border-color: 15px;
  color:white;
  -webkit-box-shadow: inset -4px -4px rgba(0,0,0,0.5);
  box-shadow: inset -4px -4px rgba(0,0,0,0.5);
  border-radius: 25px;
 }

 h2 {
  font-size: xx-large;
  border-radius: 5px;
  border: 1px dashed silver;
}
 .aa input[value="Customer"]{
    background-color: rgb(110, 248, 110); 
    border: none;
    width:300px;
    border-radius: 15px;
    font-family: sans-serif, cursive ;
    font-style: bold;
    color: black;
    padding: 25px 70px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: large;
}
.aa input[value="Vendor"]{
    background-color: rgb(248, 110, 110); 
    border: none;
    width:300px;
    border-radius: 15px;
    color: black;
    font-family: sans-serif, cursive ;
    padding: 25px 70px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: large;
 }
</style>
</head>
<body>
 <div class="aa">
 <h1>Login:</h1>
<br><br>
  <form action="#">
    <input type="button" onclick="location.href='login.php';" value="Customer" />
    <br><br><br><br>
    <input type="button" onclick="location.href='login1.php';" value="Vendor" />
  </form>
 </div>
</body>
</html>