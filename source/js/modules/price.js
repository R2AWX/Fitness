const section = document.querySelector('[data-section="abonnements"]');
const radioButton = Array.from(section.querySelectorAll('[data-input="price"]'));
const coach = Array.from(section.querySelectorAll('[data-text="coach"]'));
const daytime = Array.from(section.querySelectorAll('[data-text="daytime"]'));
const fullday = Array.from(section.querySelectorAll('[data-text="fullday"]'));
let btnIndex = 0;

function initPrice() {
  if (radioButton) {
    radioButton.forEach((btn) => {
      btn.addEventListener('input', changeIndex);
    });
  }
}

function changeIndex() {
  radioButton.forEach((btn, index) => {
    if (btn.checked) {
      btnIndex = index;
      changePrice();
    }
  });
}

function changePrice() {
  if (coach) {
    coach.forEach((price) => {
      if (btnIndex === 0) {
        price.textContent = '5000';
      }
      if (btnIndex === 1) {
        price.textContent = '30000';
      }
      if (btnIndex === 2) {
        price.textContent = '60000';
      }
    });
  }

  if (daytime) {
    daytime.forEach((price) => {
      if (btnIndex === 0) {
        price.textContent = '1700';
      }
      if (btnIndex === 1) {
        price.textContent = '10200';
      }
      if (btnIndex === 2) {
        price.textContent = '16200';
      }
    });
  }

  if (fullday) {
    fullday.forEach((price) => {
      if (btnIndex === 0) {
        price.textContent = '2700';
      }
      if (btnIndex === 1) {
        price.textContent = '20400';
      }
      if (btnIndex === 2) {
        price.textContent = '32400';
      }
    });
  }
}

export {initPrice};
