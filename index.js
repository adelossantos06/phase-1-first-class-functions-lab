function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplyNum) {
      return function newFare(fare) {
        return multiplyNum * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(array, firstOrLast) {
    if (firstOrLast == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    } else if (firstOrLast == returnLastTwoDrivers) {
        return returnLastTwoDrivers(array)
    }
}



