const buttonDiv = document.getElementById('buttonDiv');
const buttonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

const constructorOptions = (colors) => {
  for(const color of colors) {
    const button = document.createElement('button');
    button.style.backgroundColor = color;
    button.textContent = "Select"
    button.addEventListener('click', () => {
      chrome.storage.sync.set({color}, () => {
        console.log('color is ', color);
      })
    })
    buttonDiv.appendChild(button);
  }
}

constructorOptions(buttonColors);