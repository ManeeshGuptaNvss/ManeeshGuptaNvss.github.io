var date = document.getElementById('date')
function clock() {
  var dt = new Date().toString()
  date.textContent = dt.split(' ').slice(0, 5).join(' ')
}

setInterval(clock, 1000)


