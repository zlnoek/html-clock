console.log("hi");
//set time out
//javascript date method

// '.className'
// 'tag name' ex: 'body', 'div'
// '#idName' ex: 

/*
const $time = $('<div id="clock">00:00:00<div/>');

$('#app').append($time);

setTimeout(function() {
  $('#clock').remove();
}, 1000); 
*/

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var day = "";
  if (hour > 12) {
    hour -= 12;
    day = '<span class="time"> PM<span/>';
  }
  else {
    day = '<span class="time"> AM<span/>';
  }
  if (hour < 10) {
    hour = ('0' + hour).slice(-2);
  }
  if (min < 10) {
    min = ('0' + min).slice(-2);
  }
  if (sec < 10) {
    sec = ('0' + sec).slice(-2);
  }

var $hour = $('<span id="hour" class="time">'+hour+'<span/>');
var $min = $('<span id="min" class="time">'+min+'<span/>');
var $sec = $('<span id="sec" class="time">'+sec+'<span/>');
var $colon = $('<span id="colon" class="time">:<span/>');

var colon = true;

var cat = '<img src="cat.png" width="9%" height="9%"><src/>';

$('.border').append($hour,$colon,$min,day);

setInterval(function() {
  d = new Date();
  hour = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  if (hour > 12) {
    hour -= 12;
    day = '<span class="time"> AM<span/>';
  }
  if (hour < 10) {
    hour = ('0' + hour).slice(-2);
  } else{
    $hour = $('<span id="hour" class="time">'+hour+'<span/>');
    $('#hour').replaceWith($hour);
  }
  if (min < 10) {
    $min = $('<span id="min" class="time">'+cat+min+'<span/>');
    $('#min').replaceWith($min);
  } else{
    min = min.toString();
    min = min.slice(0,-1);
    min = min.parseInt();
    $min = $('<span id="min" class="time">'+min+'<span/>');
    $('#min').replaceWith($min);
  }
  if (sec < 10) {
    sec = ('0' + sec).slice(-2);
  }
  if (colon == true) {
    colon = false;
    $colon = $('<span id="colon" class="time"> <span/>');
    $('#colon').replaceWith($colon);
  } else if (colon == false) {
    colon = true;
    $colon = $('<span id="colon" class="time">:<span/>');
    $('#colon').replaceWith($colon);
  }

}, 1000); 

setInterval(function() {
  var a = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  var c = Math.floor((Math.random() * 255) + 1);
  $('.border').css("background-color", "rgb("+a+","+b+","+c+")");
}, 2000);


