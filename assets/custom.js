(function(){
  // Get year for copyright
  var currentYear = new Date().getFullYear();
  $('.current-year').text(currentYear);

  // Food page: toggle sections
  $('.btn-toggle-panel').click(function () {
    // Rotate button
    $(this).toggleClass('rotate-90');
    // Toggle corresponding panel visibility (gross)
    $(this).closest('.btn-wrap').next().next().toggleClass('open');
  });

  $('.page--endless-choices h2').click(function () {
    // Rotate button
    $(this).prev().find('.btn-toggle-panel').toggleClass('rotate-90');
    // Toggle corresponding panel visibility (gross)
    $(this).next().toggleClass('open');
  });
})();
