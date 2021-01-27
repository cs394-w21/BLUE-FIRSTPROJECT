/*
Utility Functions for Charities
*/

// Formats charities as an array of objects
// Takes in firebase snapshot of the charities (an object)
function formatCharities(snapshot) {    
    let formattedCharities = Object.values(snapshot);

    // Adds empty array to 'tags' property if missing from initial charity object
    formattedCharities = formattedCharities.map(charity => {
        let charityFormatted = charity;

        if (!charity.hasOwnProperty('tags')) {
            charityFormatted = {...charityFormatted, tags: []}
        }
        if (!charity.hasOwnProperty('items')) {
            charityFormatted = {...charityFormatted, items: []}
        }
        return charityFormatted;
    })

    return formattedCharities;
}

// function filterByTag(charity, selectedTags) {
//     return selectedTags.every(tag => charity.tags.includes(tag))
// }

// Filter charities based on whether it contains the selected tags
function filterCharities(charities, selectedTags, searchItems) {
    console.log(searchItems)
    let filteredCharities = charities.filter(charity => charity.tags.some(tag => selectedTags.includes(tag)));
    if (searchItems !== '') {
        filteredCharities = filteredCharities.filter(charity => charity.items.includes(searchItems));
    }
    return filteredCharities
}

export { formatCharities, filterCharities };