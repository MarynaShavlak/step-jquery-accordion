import { populateContainerWithData } from "./index.js";

 const accordionData = [
  {
    title: 'First Panel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum dui, tempus at tempus sit amet, ultrices sit amet augue. Nulla et egestas massa. Sed efficitur felis at mi tincidunt lacinia. Proin gravida ligula vel libero volutpat, a suscipit odio lobortis. Donec at nisi tellus. Donec euismod enim nibh, id accumsan neque commodo et. Nunc quis libero feugiat, hendrerit nulla quis, laoreet purus. Nulla nulla elit, cursus vel sem vel, maximus commodo odio. Duis ultrices luctus cursus. Cras sed ultricies erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id posuere lacus, ac bibendum ante.',
  },
  {
    title: 'Second Panel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum dui, tempus at tempus sit amet, ultrices sit amet augue. Nulla et egestas massa. Sed efficitur felis at mi tincidunt lacinia. Proin gravida ligula vel libero volutpat, a suscipit odio lobortis. Donec at nisi tellus. Donec euismod enim nibh, id accumsan neque commodo et. Nunc quis libero feugiat, hendrerit nulla quis, laoreet purus. Nulla nulla elit, cursus vel sem vel, maximus commodo odio. Duis ultrices luctus cursus. Cras sed ultricies erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id posuere lacus, ac bibendum ante.',
  },
  {
    title: 'Third Panel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum dui, tempus at tempus sit amet, ultrices sit amet augue. Nulla et egestas massa. Sed efficitur felis at mi tincidunt lacinia. Proin gravida ligula vel libero volutpat, a suscipit odio lobortis. Donec at nisi tellus. Donec euismod enim nibh, id accumsan neque commodo et. Nunc quis libero feugiat, hendrerit nulla quis, laoreet purus. Nulla nulla elit, cursus vel sem vel, maximus commodo odio. Duis ultrices luctus cursus. Cras sed ultricies erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id posuere lacus, ac bibendum ante.',
  },
  {
    title: 'Fourth Panel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum dui, tempus at tempus sit amet, ultrices sit amet augue. Nulla et egestas massa. Sed efficitur felis at mi tincidunt lacinia. Proin gravida ligula vel libero volutpat, a suscipit odio lobortis. Donec at nisi tellus. Donec euismod enim nibh, id accumsan neque commodo et. Nunc quis libero feugiat, hendrerit nulla quis, laoreet purus. Nulla nulla elit, cursus vel sem vel, maximus commodo odio. Duis ultrices luctus cursus. Cras sed ultricies erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id posuere lacus, ac bibendum ante.',
  },
];


function createAccordionItem(data) {
  const { title, content } = data;
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

export function populateAccordion(containerSelector) {
  populateContainerWithData(accordionData, createAccordionItem, containerSelector);
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
