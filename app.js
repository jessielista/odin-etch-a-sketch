const container = document.querySelector('.container')
const buttonsContainer = document.querySelector('.buttons')
const btnBlack = document.createElement('button')
const btnReset = document.createElement('button')

// This makes the grids -- Columns x Rows
function createDivs(columns, rows) {
  for (let i = 0; i < columns * rows; i++) {
    const div = document.createElement('div')
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    container.appendChild(div)
    div.classList.add('box')
  }
}

createDivs(16, 16)

function blackColor() {
  // Below is accessing the nodelist
  const boxs = container.querySelectorAll('.box')
  btnBlack.textContent = 'BLACK'

  // Below is referencing the "Event Handler"(function ()) function in the event listener that will ultimately enact the event we want once it's called.
  btnBlack.addEventListener('click', function () {
    // console.log(boxs)

    // Have to use a function with forEach
    // forEach() method calls a function for each element in an array.
    // Below is this: // Arrow function (callback function) forEach((element) => { /* ... */ })
    // https://dev.to/joelbonetr/ways-of-iterating-over-a-nodelist-1574
    boxs.forEach((box) =>
      // https://dev.to/bevinduncan/splain-like-im-five-javascript-events-3l8b
      box.addEventListener('mouseover', function () {
        this.style.background = 'black'
        // console.log('iteration worked', box)
      })
    )
  })
  buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor()

function resetButton() {
  const boxs = container.querySelectorAll('.box')
  btnReset.textContent = 'RESET'

  btnReset.addEventListener('click', function () {
    location.reload()
  })
  buttonsContainer.appendChild(btnReset).classList.add('btn')
}
resetButton()
