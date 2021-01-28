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

// Filter charities based on whether it contains the selected tags
function filterCharities(charities, selectedTags, searchItems) {
    searchItems = searchItems.toLowerCase(); // converts user text input to all lowercase
    let filteredCharities = charities

    if (selectedTags.length > 0) {
        filteredCharities = charities.filter(charity => {return selectedTags.every(tag => charity.tags.includes(tag))});
    }

    if (searchItems && searchItems.length > 0) {
        filteredCharities = filteredCharities.filter(charity => {
            return charity.items.some(item => {
                return item.includes(searchItems)
            })
        });
    }
    return filteredCharities
}

export { formatCharities, filterCharities };