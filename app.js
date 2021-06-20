$(document).ready(function () {
  var socket = io.connect("http://127.0.0.1:5000");
  let user = 1;
  socket.on("connect", function () {
    socket.send(`User${user} connected!`);
  });

  socket.on("message", function (msg) {
    $("#messages").append("<li>" + msg + "</li>");
    console.log("Received message");
  });

  $("#sendbutton").on("click", function () {
    socket.send($("#myMessage").val());
    $("#myMessage").val("");
  });
});
