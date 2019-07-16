setTimeout(() => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    return data
}, 2000)

const names = ['Ronnie', 'Richard', 'Rich', 'Ted']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        return data
    }, 2000)
}

const data = geocode('Philadelphia')
console.log(data)

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})