$(document).ready(function () {
  $('.accordion-title').click(function() {
    $(this).next('.accordion-content').slideToggle();

    let $icon = $(this).find('.icon');
    if ($icon.children().hasClass('fa-plus')) {
      $icon.html('<i class="fa-solid fa-minus"></i>');
    } else {
      $icon.html('<i class="fa-solid fa-plus"></i>');
    }
  });
});