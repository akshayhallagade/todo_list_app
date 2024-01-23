// //References
const addBtnRef = document.querySelector("#addElement");
const inputRef = document.querySelector(".create input");
const ulRef = document.querySelector("ul");
const clearAllRef = document.querySelector("#clearAll");

// //In Memory
let count = 0;

// // EventListeners
// 1. btn -->click event
addBtnRef.addEventListener("click", function (event) {
  createElement();
  inputRef.value = "";
});
// 2. Keyboard -->Enter btn event
inputRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createElement();
    inputRef.value = "";
  }
});

clearAllRef.addEventListener("click", function (event) {
  removeAll();
});

// // Methods
// 1. create Element
function createElement() {
  const valueRef = inputRef.value;
  if (valueRef !== "") {
    const newEle = document.createElement("li");
    newEle.classList.add("create");
    newEle.innerHTML = `${valueRef}
      <button id="delete">
        <i class="fa-solid fa-trash"></i>
      </button>`;
    ulRef.prepend(newEle);
    count++;
    unhidebtn();

    // delete (individual btn)
    newEle.querySelector("button").addEventListener("click", function (event) {
      const deleteEle = event.target.closest("li");
      deleteEle.remove();
      count--;
      hidebtn();
    });
  }
}

// 2. Delete (all Elements)
function removeAll() {
  const liRef = document.querySelectorAll("li");
  liRef.forEach(function (ele) {
    ele.remove();
    count--;
    hidebtn();
  });
}

//3. hide and Unhide feature for the btn
function hidebtn() {
  if (count === 0) clearAllRef.style.display = "none";
}
function unhidebtn() {
  if (count >= 0) clearAllRef.style.display = "block";
}
