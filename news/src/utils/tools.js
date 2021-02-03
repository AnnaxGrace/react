
//select top five elements in the data array.
const selectTopFive = data => {
    const resultsArray = [];
    for (let i = 0; i < 5; i++) {
        resultsArray.push(data)
    }
    return resultsArray
}

export {selectTopFive};