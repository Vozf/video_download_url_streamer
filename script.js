function readlink() {
  link = document.getElementById('link').value
  document.getElementById('video').setAttribute('src', link);
  return false
}
