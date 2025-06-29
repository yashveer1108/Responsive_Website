document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required.";
    errorMessage.style.color = "red";
  } else if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email.";
    errorMessage.style.color = "red";
  } else {
    errorMessage.textContent = "Form submitted successfully!";
    errorMessage.style.color = "green";
    this.reset();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();
  removeBtn.style.marginLeft = "1rem";

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function addImage() {
  const url = document.getElementById("imgUrlInput").value.trim();
  if (!url) return;

  const gallery = document.getElementById("imageGallery");

  const imgWrapper = document.createElement("div");

  const img = document.createElement("img");
  img.src = url;
  img.alt = "User Image";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => imgWrapper.remove();

  imgWrapper.appendChild(img);
  imgWrapper.appendChild(removeBtn);

  gallery.appendChild(imgWrapper);

  document.getElementById("imgUrlInput").value = "";
}
