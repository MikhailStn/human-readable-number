module.exports = function toReadable(number) {
    const unitsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozensArray = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let stringNumber = number.toString();

    if (stringNumber.length === 1) {
        return unitsArray[number]
    } else if (stringNumber.length === 2) {
        if (stringNumber[1] === '0') {
            return tensArray[stringNumber[0] - 1]
        } else if (stringNumber > 10 && stringNumber < 20) {
            return dozensArray[stringNumber[1] - 1]
        } else if (stringNumber > 20 && stringNumber < 100) {
            return tensArray[stringNumber[0] - 1] + ' ' + unitsArray[stringNumber[1]]
        }
    } else if (stringNumber.length === 3) {
        if (stringNumber[1] === '0' && stringNumber[2] === '0') {
            return unitsArray[stringNumber[0]] + ' hundred'
        } else if (stringNumber[1] === '0' && stringNumber[2] !== '0') {
            return unitsArray[stringNumber[0]] + ' hundred ' + unitsArray[stringNumber[2]]
        } else if (stringNumber[1] !== '0' && stringNumber[2] === '0') {
            return unitsArray[stringNumber[0]] + ' hundred ' + tensArray[stringNumber[1] - 1]
        } else if (stringNumber[1] === '1') {
            return unitsArray[stringNumber[0]] + ' hundred ' + dozensArray[stringNumber[2] - 1]
        } else if (stringNumber[1] !== '1' && stringNumber[1] !== '0') {
            return unitsArray[stringNumber[0]] + ' hundred ' + tensArray[stringNumber[1] - 1] + ' ' + unitsArray[stringNumber[2]]
        }
    }
}
