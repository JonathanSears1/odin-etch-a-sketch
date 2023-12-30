const container = document.querySelector("#container")
const reset = document.querySelector("#reset")
const toggleEraser = document.querySelector("#eraser")
const userGridSize = document.querySelector("#user_grid_size")
const changeSize = document.querySelector("#size")
let eraser = false
let mouse = false
let gridSize = 16
toggleEraser.addEventListener("click",() => {
    if (eraser == true) {
        eraser = false
        toggleEraser.setAttribute("background-color","#707070")
    }
    else {
        eraser = true
        toggleEraser.setAttribute("background-color","#b02e2e")
    }
})
container.addEventListener("mousedown", () => mouse = true)
container.addEventListener("mouseup", ()  => mouse = false)

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div")
        row.className = "row"
        row.style.height = "6.25%"
        row.style.width = "100%"
        row.style.display = "flex"
        container.appendChild(row)
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement("div")
            square.className = "square"
            square.style.width = "25%"
            square.style.height = "100%"
            square.style.flex = "auto"
            square.style.border = "solid"
            square.style.borderWidth = "1px"
            square.addEventListener("mouseover",() => {
                if (eraser) {
                    if (mouse) {square.style.backgroundColor = "#c7c7c7"}
                }
                else {
                    if (mouse) {square.style.backgroundColor = "black"}
                }
            })
            row.appendChild(square)
        }
    }
}
function deleteGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
createGrid()
reset.addEventListener("click", () => {deleteGrid(); createGrid()})
changeSize.addEventListener("click", () => {
    gridSize = userGridSize.value
    userGridSize.value = ""
    deleteGrid()
    createGrid()
})