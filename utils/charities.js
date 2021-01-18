import data from '../data.json'

function getCharities() {
    let charities = []
    console.log(data.charities)
    for (const id in data.charities) {
        charities.push(data["charities"][id])

    }
    console.log(charities)
    return charities
}

export default getCharities;