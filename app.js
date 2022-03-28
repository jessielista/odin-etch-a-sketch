const container = document.querySelector('.container')

function createDivs(columns, rows) {
  for (let i = 0; i < columns * rows; i++) {
    const div = document.createElement('div')
    // div.style.border = '1px solid green'
    // container.getElementsByClassName.gridTemplateColumns = `repeat(${columns}, ifr)`
    // container.getElementsByClassName.gridTemplateRows = `repeat(${rows}, ifr)`
    div.setAttribute('class', 'showBox')
    container.appendChild(div)
  }
}

createDivs(2, 2)
