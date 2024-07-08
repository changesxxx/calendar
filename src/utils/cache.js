class Cache {
  getItem(key) {
    debugger
    if (key instanceof Object || Array.isArray(key)) {
      key = JSON.stringify(key)
    }
    return JSON.parse(localStorage.getItem(key))
  }

  setItem(key, value) {
    if (key instanceof Object || Array.isArray(key)) {
      key = JSON.stringify(key)
    }

    if (value instanceof Object || Array.isArray(value)) {
      value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)
  }

  removeItem(key) {
    if (key instanceof Object || Array.isArray(key)) {
      key = JSON.stringify(key)
    }
    localStorage.removeItem(key)
  }
}

export default new Cache()
