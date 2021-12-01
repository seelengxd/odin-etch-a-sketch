// size is how many boxes per one side
function darkenBox(box){
    console.log(box.classList)
    let darknessStr = Array.from(box.classList).find(cls => cls.length === 2)
    if (darknessStr){
        let darkness = +darknessStr.slice(1);
        darkness += 1;
        box.classList.remove(darknessStr);
        box.classList.add("b" + darkness);
    }
    
}

function makeBox(size){
    const box = document.createElement("div")
    box.classList.add("box");
    box.classList.add("b0")
    box.style.flexBasis = 1 / size * 100 + "%";
    box.addEventListener("mouseover", () => darkenBox(box));
    return box;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function drawGrid(size){
    const container = document.querySelector(".container");
    removeAllChildNodes(container);
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            container.appendChild(makeBox(size));
        }
    }

}

drawGrid(16);

function handleForm(e){
    e.preventDefault();
}

document.querySelector("form").addEventListener("submit", handleForm);

function clearGrid(){
    document.querySelectorAll(".box").forEach(box => box.classList = "box b0")
}

document.querySelector("input[value='Clear']").addEventListener("click", clearGrid)

function generateGrid(){
    size = document.querySelector("input[type='number']").value;
    drawGrid(size);

}

document.querySelector("input[value='Generate Grid']").addEventListener("click", generateGrid);