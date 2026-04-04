function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;

  const caption = img.nextElementSibling.innerText;
  document.getElementById("modalCaption").innerText = caption;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}