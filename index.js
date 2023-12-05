import { populateAccordion, handleAccordionClick } from './accordion.js';
import { populateSkillbar } from './skillbar.js';

$(document).ready(function () {
  populateAccordion('.accordion__container');
  populateSkillbar('.skillbar__list');

  $('.accordion-title').click(function () {
    handleAccordionClick($(this));
  });
});

export function populateContainerWithData(
  dataArray,
  createItemFunction,
  containerSelector,
) {
  dataArray.forEach(function (data) {
    const item = createItemFunction(data);
    $(containerSelector).append(item);
  });
}
