$(document).ready(function() {
     $('.tip').tipr({
      'mode' : 'top'
 });
});




$(document).ready(function() {
  var options = {minMargin: 0, maxMargin: 15, itemSelector: ".item", firstItemClass: "first-item"};
  $(".container").rowGrid(options);
});