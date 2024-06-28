class Cache {
  getItem(key) {
    return JSON.parse(localStorage.getItem(JSON.stringify(key)))
  }

  setItem(key, value) {
    localStorage.setItem(JSON.stringify(key), JSON.stringify(value))
  }

  removeItem(key) {
    localStorage.removeItem(JSON.stringify(key))
  }
}

export default new Cache()
