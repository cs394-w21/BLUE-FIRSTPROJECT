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
        filteredCharities = charities.filter(charity => {return selectedTags.some(tag => charity.tags.includes(tag))});
    }

    if (searchItems && searchItems.length > 0) {
        filteredCharities = filteredCharities.filter(charity => {
            var searchTerms = [charity.name, charity.description]
            if (charity.tags) {
                searchTerms.push(...charity.tags)
            }
            if (charity.items) {
                searchTerms.push(...charity.items)
            }

            searchTerms = searchTerms.filter(function(x) {
                return x !== undefined;
             })

            return searchTerms.some(item => {
                return item.toLowerCase().includes(searchItems.toLowerCase())
            })
        });
    }
    return filteredCharities
}

// Sort list of charities in order of increasing distance
function sortCharitiesByDistance(charities) {
    // parseInt will get the distance number from the distance property in a charity
    return charities.sort((charityA, charityB) => (parseInt(charityA.distance) > parseInt(charityB.distance)) ? 1 : -1);
}

// Get list of favoritied charities from favorited ids
function filterFavoritedCharities(charities, favoriteIDs) {    
    const favoritedCharities = charities.filter(charity => favoriteIDs.includes(charity.id));    
    return favoritedCharities;    
}

export { formatCharities, filterCharities, sortCharitiesByDistance, filterFavoritedCharities };