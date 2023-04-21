localStorage.setItem("name", "Bob")
localStorage.removeItem("nmae")

sessionStorage.setItem("name", "John")
sessionStorage.setItem("name", "Bob")

document.cookie = "name=Kyle; expires=" + new Date(2020, 0, 1).toUTCString
document.cookie = "lastName=Smith; expires=" + new Date(2020, 0, 1).toUTCString