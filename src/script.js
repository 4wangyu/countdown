const countdown = document.querySelector('#countdown');
const dateInput = document.querySelector('#enddate');

chrome.storage.sync.get(['enddate']).then((result) => {
  dateInput.value = result.enddate || '';
});

dateInput.oninput = function () {
  chrome.storage.sync.set({ enddate: this.value });
};

setInterval(() => {
  const endDate = new Date(dateInput.value);
  const now = new Date();
  if (endDate > now) {
    const leftSeconds = Math.floor((endDate - now) / 1000);
    const hours = Math.floor(leftSeconds / 60 ** 2)
      .toString()
      .padStart(4, '0');
    const minutes = Math.floor((leftSeconds % 60 ** 2) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (leftSeconds % 60).toString().padStart(2, '0');
    countdown.textContent = `${hours}:${minutes}:${seconds}`;
  } else {
    countdown.textContent = '0000:00:00';
  }
}, 1000);
