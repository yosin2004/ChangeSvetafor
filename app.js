const container = document.querySelector(".container");

const item = document.querySelector(".item");

const block = document.querySelector(".block");

function changeValue(elem, value) {
  elem.innerHTML = value;
  console.log("value");
  console.log("Hello, World!");
}

function switchon(item) {
  item.style.opacity = "100%";
  for (let i = 0; i < 3; i++) {
    setTimeout(changeValue, i * 1500, item, 3 - i);
  }
}

function switchoff(item) {
  item.style.opacity = "23%";
  item.innerHTML = "";
}

function run() {
  setTimeout(switchon, 0, container);
  setTimeout(switchoff, 3000, container);
  setTimeout(switchon, 3000, item);
  setTimeout(switchoff, 6000, item);
  setTimeout(switchon, 6000, block);
  setTimeout(switchoff, 9000, block);
}
run();
setInterval(run, 9000);
