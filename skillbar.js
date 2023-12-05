import { populateContainerWithData } from "./index.js";

 const skillbarData = [
  { percent: "75%", value: 75, title: "New Visitors", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { percent: "90%", value: 90, title: "Social Media", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { percent: "60%", value: 60, title: "Referrals", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { percent: "80%", value: 80, title: "Search Engines", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

 function createSkillbarItem(data) {
  const {percent, value, title, text} = data;

    const li = $('<li class="skillbar__item" data-percent="' + percent + '"></li>');
    const wrapEl = $('<div class="skillbar__wrap"></div>');
    const skillbarEl = $('<div class="skillbar" data-value="' + value + '"></div>');
    const percentEl = $('<div class="skillbar__percent"></div>');
    const titleEl = $('<p class="skillbar__title">' + title + '</p>');
    const textEl = $('<p class="skillbar__text">' + text + '</p>');

    wrapEl.append(skillbarEl, percentEl);
    li.append(wrapEl, titleEl, textEl);

  return li;
}

export function populateSkillbar(containerSelector) {
  populateContainerWithData(skillbarData, createSkillbarItem, containerSelector);

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
      }
    }
  );
}