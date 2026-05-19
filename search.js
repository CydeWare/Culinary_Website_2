// const userCardTemplate = document.querySelector("[data-user-template]")
const searchInput = document.querySelector(".searchTerm")
// const header = document.querySelectorAll(".header");
// const body = document.querySelectorAll(".body")
const elements = document.querySelectorAll(".col-4");

let users = []

const headerArr = Array.from(document.querySelectorAll(".place-name")).map(t => t.innerText);
const bodyArr = Array.from(document.querySelectorAll(".place-location")).map(t => t.innerText);


for(let i = 0; i < headerArr.length; i++) {
  users.push({
    name: headerArr[i],
    email: bodyArr[i],
    element: elements[i]
  })
}

console.log(users);

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
