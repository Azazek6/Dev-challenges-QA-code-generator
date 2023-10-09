const buttonGenerateQR = document.getElementById("button-generate");

const handleUrl = (e) => {
  e.preventDefault();
  const inputUrl = document.getElementById("url").value;
  if (inputUrl == "") {
    alert("No debe estar vacio");
    return;
  }

  localStorage.setItem("valueURL", inputUrl);

  window.location.href = "qr-generate.html";
};

buttonGenerateQR.addEventListener("click", handleUrl);
