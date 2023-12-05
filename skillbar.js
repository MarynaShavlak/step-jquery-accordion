import { populateContainerWithData } from './index.js';

const skillbarData = [
  {
    value: 75,
    title: 'New Visitors',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    value: 90,
    title: 'Social Media',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    value: 60,
    title: 'Referrals',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    value: 80,
    title: 'Search Engines',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

function createSkillbarItem(data) {
  const { value, title, text } = data;
  const color = getColorBasedOnValue(value);

  const li = $(`
          <li class="skillbar__item" data-percent="${value}%">
            <div class="skillbar__wrap">
              <div class="skillbar" data-value="${value}" style="--color: ${color};"></div>
              <div class="skillbar__percent"></div>
            </div>
            <p class="skillbar__title">${title}</p>
            <p class="skillbar__text">${text}</p>
          </li>
        `);
  return li;
}

export function populateSkillbar(containerSelector) {
  populateContainerWithData(
    skillbarData,
    createSkillbarItem,
    containerSelector,
  );

  $('.skillbar__item').each(function () {
    const skillbarItem = $(this);
    const skillbar = skillbarItem.find('.skillbar');
    const value = skillbar.data('value');
    $(this).find('.skillbar__percent').text(`${value}%`);

    animateSkillbar(skillbar, value);
  });
}

function animateSkillbar(skillbar, value) {
  skillbar.animate(
    { '--percentage': value },
    {
      duration: 2000,
      start: function () {
        skillbar.css('animation', 'none');
      },
      step: function (now) {
        skillbar.css('--percentage', now);
      },
      complete: function () {
        skillbar.css('animation', '');
      },
    },
  );
}

function getColorBasedOnValue(value) {
  let color;
  switch (true) {
    case value < 65:
      color = '#ec4d52';
      break;
    case value >= 65 && value <= 75:
      color = '#29aadc';
      break;
    case value > 75 && value < 85:
      color = '#fec25a';
      break;
    default:
      color = '#89cf7e';
  }
  return color;
}
