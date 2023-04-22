var todayDate = new Date();
var currentMonth = todayDate.getMonth();
var currentYear = todayDate.getFullYear();

monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dispMonth = monthList[currentMonth];

var blogDateLg = document.getElementById("date1");
var blogDateSm = document.querySelectorAll(".date1");;

blogDateLg.textContent = dispMonth + " " + currentYear;
for (var i = 0; i < blogDateSm.length; i++) {
    blogDateSm[i].textContent = dispMonth + " " + currentYear;
}
