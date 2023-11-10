const codes = document.querySelectorAll("code");

for (const code of codes) {
  console.log(code);
  const copyBtn = document.createElement("i");
  copyBtn.classList.add("fa-solid", "fa-copy");
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(code.textContent);
  };
  code.parentElement.appendChild(copyBtn);
}