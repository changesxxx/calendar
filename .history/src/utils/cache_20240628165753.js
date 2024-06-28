class Cache {
  getItem(key) {
    JSON.stringify(localStorage.getItem(key))
  }
}
