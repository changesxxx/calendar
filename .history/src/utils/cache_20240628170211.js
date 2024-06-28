class Cache {
  getItem(key) {
    JSON.stringify(localStorage.getItem(key))
  }

  setItem(key, value) {
    localStorage.setItem(JSON.stringify(key), JSON.stringify(value))
  }
}
