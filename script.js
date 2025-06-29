// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  if (!name || !email || !message) {
    e.preventDefault();
    error.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    e.preventDefault();
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = "";
});

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
}
