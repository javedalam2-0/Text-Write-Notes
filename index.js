let addNote = document.getElementById("addNote");
let deleteIcon = document.querySelector(".icon");
let addBtn = document.querySelector("#addBtn");

addNote.addEventListener("click", function () {
  document.querySelector(".addForm").style.display = "block";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});

deleteIcon.addEventListener("click", function () {
  document.querySelector(".addForm").style.display = "none";
});


addBtn.addEventListener("click", function () {
  //  document.querySelector(".addForm").style.display ="none"
    let div = document.createElement("div");
  div.classList.add("myNote");
  div.innerHTML = `
    <h2>${document.getElementById("title").value}</h2>
    <p>${document.getElementById("description").value}</p>
    <button>Delete Note</button>`;
  div.querySelector("button").addEventListener("click", function () {
    div.remove();
  });
  document.querySelector(".newNotes").appendChild(div);
});
