const containerQR = document.getElementById("qrcode");
const buttonDownload = document.getElementById("Download");
const link = document.getElementById("redirect");
const value = localStorage.getItem("valueURL");
const image = containerQR.querySelector("img");

const qrCode = new QRCode(containerQR, value);

buttonDownload.addEventListener("click", () => {
  // Obtiene la URL de la imagen del código QR
  const imageUrl = containerQR.querySelector("img").src;

  // Crea un enlace de descarga
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "codigoQR.png"; // Nombre del archivo de descarga

  // Agrega el enlace al documento HTML
  document.body.appendChild(link);

  // Simula un clic en el enlace para iniciar la descarga
  link.click();

  // Elimina el enlace del documento HTML
  document.body.removeChild(link);
});

link.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/";
});
