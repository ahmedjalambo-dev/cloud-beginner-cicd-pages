let clickCount = 0;

document.getElementById("btn").addEventListener("click", () => {
  clickCount++;
  document.getElementById("msg").innerText =
    "Hello from JavaScript! CI/CD is working!";
  document.getElementById("counter").innerText = clickCount;
});
