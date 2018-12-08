let changeColor = document.getElementById('changeColor');

// change button color to color value set in chrome storage
chrome.storage.sync.get('color', ({color}) => {
  console.log(color);
  changeColor.style.backgroundColor = color;
  changeColor.setAttribute('value', color);
})

changeColor.onclick = (event) => {
  let color = event.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log(tabs);
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: `document.body.style.backgroundColor = ${color}`}
    );
  })
}
