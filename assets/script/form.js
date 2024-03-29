const formEl = document.querySelector("form")
const usernameEl = document.getElementById("username").value.trim()
const contentEl = document.getElementById("content").value.trim()
const titleEl = document.getElementById("title").value.trim()

console.log (usernameEl)
//creating code to gather form input
function formInput(e) {
    e.preventDefault()
    if(!usernameEl || !titleEl || !contentEl){
     const errorEl = document.getElementById("error")
     errorEl.textContent = "Must Complete Form"
     setTimeout(function(){
        errorEl.textContent = '';
     },4000)

     return

 
    }
   const inputInfo = {
    usernameEl:usernameEl,
    titleEl:titleEl,
    contentEl:contentEl,
   } 
   const allBlogs = localStorage.setItem("blog",JSON.stringify(inputInfo) || [])
}


formEl.addEventListener("submit",formInput)