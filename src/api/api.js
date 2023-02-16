export default {
    getAlbums() {
        return fetch('https://jsonplaceholder.typicode.com/albums/').then((res) => res.json()).then((res) => {
            return res
        })
    },
    getPhotos(id) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then((res) => res.json()).then((res) => {
            return res
        })
    }
}