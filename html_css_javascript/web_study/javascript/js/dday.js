var now = new Date();
var meetday = prompt("처음 만날 날을 yyyy-mm-dd행태로 작성해주세요.");
var firstDay = new Date(meetday);

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

var passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector("#accent").innerText = passedDay + "일";

//함수 호출
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

//기념일 계산 함수 생성
function calcDate(days){
    var future = toFirst + days*(1000*60*60*24);
    var someday = new Date(future);

    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();
    document.querySelector("#date"+days).innerText = year + "년" + month + "월" + date + "일";
}




