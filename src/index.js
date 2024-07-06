document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    toDoList(ev.target.new_task.value);
  });
});
function toDoList(todoitems) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", toDelete);
  btn.textContent = "delete";
  p.textContent = `${todoitems}`;
  p.appendChild(btn);
  console.log(p);
  document.querySelector("#list").appendChild(p);
}
function toDelete(ev) {
  ev.target.parentNode.remove();
}
