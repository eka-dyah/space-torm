export const floatTwoPoint = (number) => {
    if (number === undefined || isNaN(number)) {
        return "-"
    } else if (number) {
        return parseFloat(number).toFixed(2)
    }
}
