function readlink() {
  link = document.getElementById('link').value
  document.getElementById('video').setAttribute('src', link);
  setQuery(link)
  return false
}

function setQuery(link) {
  let urlParams = new URLSearchParams(window.location.search);
  urlParams.set('link', link);
  console.log(urlParams)
  
  history.pushState(null, null, "?"+urlParams.toString());



}

function readQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const link = urlParams.get('link');
  document.getElementById('video').setAttribute('src', link);
  document.getElementById('link').value = link
  
}

window.onload = readQuery


