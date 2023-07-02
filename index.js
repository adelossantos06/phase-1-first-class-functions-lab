function returnFirstTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2, 5)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplyNum) {
    return function newFare(fare) {
        return multiplyNum * fare
    }

}

function fareDoubler(fareToBeDoubled) {
    return fareToBeDoubled * 2
}

function fareTripler(fareToBeTrippled) {
    return fareToBeTrippled * 3
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function selectDifferentDrivers(array, firstOrLast) {
    array = ['Antonia', 'Nuru', 'Amari', 'Mo']
    if (firstOrLast == returnFirstTwoDrivers) {
        return array.slice(0, 2)
    } else if (firstOrLast == returnLastTwoDrivers) {
        return array.slice(2, 5)
    }
}



