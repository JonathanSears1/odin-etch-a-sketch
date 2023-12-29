const container = document.querySelector("#container")

console.log("hello world")
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.className = "row"
    row.style.height = "6.25%"
    row.style.width = "100%"
    row.style.display = "flex"
    container.appendChild(row)
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div")
        square.className = "square"
        square.style.width = "25%"
        square.style.height = "100%"
        square.style.flex = "auto"
        square.addEventListener("mouseover",() => square.style.backgroundColor = "red")
        square.addEventListener("mouseleave", () => square.style.backgroundColor = "blue")
        row.appendChild(square)
    }
}