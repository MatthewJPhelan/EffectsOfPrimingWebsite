var i = 2;
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 3;
var check = setInterval(myTimer, 1000);
var clicked = storeClicked();
var clickedArr = [];
var temp = 0;
countdownNumberEl.textContent = countdown;

function storeClicked(){
  var picture1 = document.getElementById("photo1");
  var picture2 = document.getElementById("photo2");
  picture1.onclick = function(){
    document.getElementById('checkmark').className = 'checkmark';
    var pic1src = picture1.src;
    console.log(pic1src);
    var length = pic1src.length;
    var str = pic1src.substr(length-7, 2);
    console.log(str);

    var sub = str.substr(0,1);
    if(sub=="/"){
      clickedArr.push(str.substr(1,1));
    } else {
      clickedArr.push(str);
    }
  }
  picture2.onclick = function(){
    document.getElementById('checkmark').className = 'checkmark';
    var pic2src = picture2.src;
    console.log(pic2src);
    var length = pic2src.length;
    var str = pic2src.substr(length-7, 2);
    console.log(str);

    var sub = str.substr(0,1);
    if(sub=="/"){
      clickedArr.push(str.substr(1,1));
    } else {
      clickedArr.push(str);
    }
  }
}

// window.onload = function(){
//   var extId = document.getElementById("extId_placeholder").innerHTML;
//   document.getElementById('extensionId').value = extId;
// }

function myTimer() {
  console.log(i);
  if(i<=27){
    countdown = --countdown <= 0 ? 3 : countdown;
    countdownNumberEl.textContent = countdown;
    if(countdown==3) {
      document.getElementById('checkmark').className = 'check';
      pictureChange();
      progress();
    }
  } else {
    pauseFunction();
    var val = document.getElementById("extId_placeholder").innerText;
    console.log(val);
    document.getElementById("extensionId").value = val;
    alert(clickedArr + " : " + document.getElementById("extensionId").value);
    passHelper(clickedArr);
    // document.location.href = 'index0.html'
  }
}

function passVars(arr){
  console.log("in passVars");
  var relative = (temp*2)+1
  if(arr.length>0){
    if(arr[0]<relative){
      arr.shift();
      passVars(arr);
    } else {
      passHelper(arr);
    }
  } else {
    document.forms["myForm"].submit();
  }
}

function passHelper(arr){
  var passed= arr[0];
  temp = Math.floor(passed/2);
  var elName = "qu" + (temp+1);
  console.log(elName);
  console.log("passed:" + passed);
  document.getElementById(elName).value = passed;
  arr.shift()
  passVars(arr);
}

function pictureChange(){
  var image_number = Number(i+1);
  var number_string = String(image_number);
  var image_one = "img/" + i + ".jpeg";
  var image_two = "img/" + number_string + ".jpeg";
  document.getElementById('photo1').src=image_one;
  document.getElementById('photo2').src=image_two;
}

function progress(){
  var progress_level = i*4;
  document.getElementById("progress").style.width = progress_level + "%";
    i=i+2;
}

function pauseFunction() {
  document.getElementById("countdown").style.visibility = "hidden";
}
