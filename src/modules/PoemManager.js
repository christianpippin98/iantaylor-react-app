const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/poems/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/poems`).then(result => result.json())
  }
}