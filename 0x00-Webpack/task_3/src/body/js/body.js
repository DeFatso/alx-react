import $ from 'jquery';
import debounce from 'lodash/debounce';

console.log('Init body');

function updateCounter() {
  let count = 0;
  return function () {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

const debouncedUpdateCounter = debounce(updateCounter(), 300);

$(document).ready(function () {
  $('body').append("<button id='btn'>Click here to get started</button>");
  $('body').append("<p id='count'></p>");

  $('#btn').click(debouncedUpdateCounter);
});