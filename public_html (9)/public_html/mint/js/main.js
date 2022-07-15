/**
 * Project  : Restless
 * Date     : 04.10.2022
 * Author   : Ferdi Sahin
 * E-mail   : ferdi@nextkube.net
*/

AOS.init();
var applicationType= null;
$('.modal-btn').on('click', function(){
    $('.modal--area').toggleClass('hidden');
    applicationType = $(this).data('application');
    return false;
});

$('.menu-btn').on('click', function(){
    $('.menu--area').toggleClass('hidden');
    return false;
});

$('.mint-btn').on('click', function(){
    $('.menu--area').addClass('hidden');
});

/** COUNTDOWN */
function countdown() {
    var endTime = new Date("10 June 2022 9:56:00 GMT+01:00");			
endTime = (Date.parse(endTime) / 1000);

var now = new Date();
now = (Date.parse(now) / 1000);

var timeLeft = endTime - now;

var days = Math.floor(timeLeft / 86400); 
var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

if (hours < "10") { hours = "0" + hours; }
if (minutes < "10") { minutes = "0" + minutes; }
if (seconds < "10") { seconds = "0" + seconds; }

$("#days").html(days);
$("#hours").html(hours);
$("#minutes").html(minutes);
}
setInterval(function() { countdown(); }, 1000);


