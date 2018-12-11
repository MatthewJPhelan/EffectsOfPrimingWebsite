var btn = document.getElementById('btn');
btn.onclick = function(){
  console.log("clicked");
  var input = document.getElementById('ln_input').value;
  console.log(input);
  if (input == "00000") {
    console.log('true');
    // document.location.href = "main.html";
    document.location.href = "#popup1";
  } else {
    alert('lobby id incorrect');
  }
}
var consentbtn = document.getElementById('consentbtn');
consentbtn.onclick = function(){
  var consent = document.querySelector('#consent:checked').value
  // document.getElementById('consent').value;
  console.log(consent);
  if (consent == "on") {
    document.location.href = "main.html";
  }
}
