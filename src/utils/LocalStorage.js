class LocalStorage {
  localStorage = window.localStorage;

  get(key) {
    const ls = this.localStorage;

    try {
      return JSON.parse(ls.getItem(key));
    } catch (e) {
      return ls.getItem(key);
    }
  }

  set(key, val, saveRaw = false) {
    const ls = this.localStorage;

    if (!saveRaw && typeof val === 'object') {
      ls.setItem(key, JSON.stringify(val));
    } else {
      ls.setItem(key, val);
    }

    return this.get(key);
  }

  clear() {
    this.localStorage.clear();
  }
}

export default new LocalStorage();
