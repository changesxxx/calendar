class Cache {
  getItem(key) {
    JSON.parse(localStorage.getItem(JSON.stringify(key)))
  }

  setItem(key, value) {
    localStorage.setItem(JSON.stringify(key), JSON.stringify(value))
  }

  removeItem(key) {
    localStorage.removeItem(JSON.stringify(key))
  }
}
