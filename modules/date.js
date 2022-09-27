import { DateTime } from './luxon.js';

const actualDate = () => {
  function date() {
    const dt = DateTime.now().toString();
    document.querySelector('.date').innerHTML = dt;
  }

  date();
  setInterval(date, 1000);
};

export default actualDate;
