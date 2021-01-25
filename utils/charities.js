/*
Utility Functions for Charities
*/

// Formats charities as an array of objects
// Takes in firebase snapshot of the charities (an object)
function formatCharities(snapshot) {    
    let formattedCharities = Object.values(snapshot);

    // Adds empty array to 'tags' property if missing from initial charity object
    formattedCharities = formattedCharities.map(charity => {
        if (!charity.hasOwnProperty('tags')) {
            return {...charity, tags: []}
        }
        else return charity;
    })

    return formattedCharities;
}

// Filter charities based on whether it contains the selected tags
function filterCharities(charities, selectedTags) {
    return charities.filter(charity => charity.tags.some(tag => selectedTags.includes(tag)))
}

export { formatCharities, filterCharities };