import {createAccordionItem, handleAccordionClick} from './accordion.js'


$(document).ready(function () {
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

  accordionData.forEach(function (data) {
    const { title, content } = data;
    const accordionItem = createAccordionItem(title, content);
    $('.accordion__container').append(accordionItem);
  });

  $('.accordion-title').click(function () {
    handleAccordionClick($(this));
  });
});

