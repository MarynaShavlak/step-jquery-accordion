export function createAccordionItem(title, content) {
  const accordionItem = $(
    '<div class="accordion">' +
      '<div class="accordion-title">' +
      title +
      '<button class="icon" type="button"><i class="fa-solid fa-plus"></i></button>' +
      '</div>' +
      '<div class="accordion-content">' +
      content +
      '</div>' +
      '</div>',
  );
  return accordionItem;
}

export function handleAccordionClick(clickedElement) {
  toggleAccordionContent(clickedElement);
  closeOtherAccordionContents(clickedElement);
  toggleActiveClass(clickedElement);
  toggleIcon(clickedElement);
}

 function toggleAccordionContent(accordionTitle) {
  accordionTitle.next('.accordion-content').slideToggle();
}

 function closeOtherAccordionContents(clickedElement) {
  $('.accordion-content')
    .not(clickedElement.next('.accordion-content'))
    .slideUp();
  $('.accordion-title').not(clickedElement).removeClass('active');
  $('.accordion-title')
    .not(clickedElement)
    .find('.icon')
    .html('<i class="fa-solid fa-plus"></i>');
}

 function toggleActiveClass(accordionTitle) {
  accordionTitle.toggleClass('active');
}

 function toggleIcon(accordionTitle) {
  let $icon = accordionTitle.find('.icon');
  if ($icon.children().hasClass('fa-plus')) {
    $icon.html('<i class="fa-solid fa-minus"></i>');
  } else {
    $icon.html('<i class="fa-solid fa-plus"></i>');
  }
}
