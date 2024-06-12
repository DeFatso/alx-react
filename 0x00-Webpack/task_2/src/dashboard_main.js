import $ from 'jquery';
import debounce from 'lodash/debounce';
import './css/main.css';

function updateCounter() {
  let count = 0;
  return function () {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

const debouncedUpdateCounter = debounce(updateCounter(), 300);

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append("<button id='btn'>Click here to get started</button>");
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#btn').click(debouncedUpdateCounter);
});