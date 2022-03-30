function onClick() {
  const content = document.querySelector(".toggleBar");
  content.classList.toggle("isOpen");
  document.getElementById("xxx").classList.toggle("aaa");

  const menuLong = document.querySelectorAll(".longBar");
  for (let i = 0; i < menuLong.length; i++) {
    menuLong[i].classList.toggle("hideBar");
  }
}

function onClickEmail(){
    const contentEmail = document.querySelector('.contentEmail')
    contentEmail.classList.toggle("isOpenEmail")
}
