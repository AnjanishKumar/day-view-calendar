import Vue from 'vue';

function twoDigit(value) {
  if (value === undefined) return '';
  if (value.toString().length <= 1) {
    return `0${value.toString()}`;
  }
  return value.toString();
}

function formatTime(value, format = '24hr') {
  const [hour, minute = 0] = value.toString().split(':').map(v => parseInt(v, 10));
  if (format === '24hr') {
    return `${twoDigit(hour)}:${twoDigit(minute)}`;
  }
  if (format === 'ampm') {
    if (hour === 12) {
      return `${twoDigit(hour)}:${twoDigit(minute)} PM`;
    }
    if (hour > 12) {
      return `${twoDigit(hour - 12)}:${twoDigit(minute)} PM`;
    }
    return `${twoDigit(hour)}:${twoDigit(minute)} AM`;
  }
  return value;
}

Vue.filter('two_digits', twoDigit);
Vue.filter('formatTime', formatTime);
