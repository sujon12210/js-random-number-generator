function generate(){
  const random = Math.floor(Math.random() * 100) + 1;
  document.getElementById('number').innerText = random;
}
