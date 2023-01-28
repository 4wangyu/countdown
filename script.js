const dateInput = document.querySelector('#enddate');

chrome.storage.sync.get(['enddate']).then((result) => {
  dateInput.value = result.enddate || '';
});

dateInput.oninput = function () {
  chrome.storage.sync.set({ enddate: this.value });
};
