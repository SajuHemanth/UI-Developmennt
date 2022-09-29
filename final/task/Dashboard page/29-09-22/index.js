$(document).ready(function () {
  $('#example').DataTable({
      scrollY: 150,
      scrollX: true,
  });
});


/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



// // $('.calendar-wrapper').calendar();function selectDate(date) {
// //   $('#calendar-wrapper').updateCalendarOptions({
// //     date: date
// //   });
// //   console.log(calendar.getSelectedDate());
// // }

// // var defaultConfig = {
// //   weekDayLength: 1,
// //   date: '08/05/2021',
// //   onClickDate: selectDate,
// //   showYearDropdown: true,
// //   startOnMonday: false,
// // };

// // var calendar = $('#calendar-wrapper').calendar(defaultConfig);
// // console.log(calendar.getSelectedDate());

// function selectDate(date) {
//   $('#calendar-wrapper').updateCalendarOptions({
//     date: date
//   });
//   console.log(calendar.getSelectedDate());
// }

// var defaultConfig = {
//   weekDayLength: 1,
//   date: '08/05/2021',
//   onClickDate: selectDate,
//   showYearDropdown: true,
//   startOnMonday: false,
// };

// var calendar = $('#calendar-wrapper').calendar(defaultConfig);
// console.log(calendar.getSelectedDate());