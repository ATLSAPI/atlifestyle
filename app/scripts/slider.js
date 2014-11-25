/**
* Created by goatie on 24/11/14.
*/


$(document).ready(function() {
  $("#budget_range").ionRangeSlider({
    min: 1000,
    max: 50000,
    from: 1000,
    to: 35000,
    type: 'double',
    step: 1000,
    prefix: "£",
    prettify: true,
    grid: true
  });


  $("#running_cost_range").ionRangeSlider({
    from: 0,
    from_shadow: true,
    to: 3,
    to_shadow: true,
    prettify_enabled: true,
    type: 'single',
    values: ["Low", "Economy", "Moderate", "High"]
  });


  $("#speed_range").ionRangeSlider({
    from: 0,
    from_shadow: true,
    to: 3,
    to_shadow: true,
    prettify_enabled: true,
    type: 'single',
    values: ["Any", "Average", "Fast", "Hamilton"]
  });

  var updateSliderScale;
  $(window).resize(function () {
    clearTimeout(updateSliderScale);
    updateSliderScale = setTimeout(function () {
      $("#budget_range").ionRangeSlider('update');
      $("#running_cost_range").ionRangeSlider('update');
      $("#speed_range").ionRangeSlider('update');
      $("#bgslider").ionRangeSlider('update');
    }, 100);
  });
  // onLoadPage()
});
