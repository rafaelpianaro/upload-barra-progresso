const dropArea = document.querySelector(".drag-files")
console.log('dropArea', dropArea)

dropArea.addEventListener("dragover", () => {
  dropArea.classList.add("dragover") 
})

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("dragover")
})