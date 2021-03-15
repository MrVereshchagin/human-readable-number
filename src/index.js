module.exports = function toReadable (number) {
    const   numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberToString = number.toString();
    const lengthNumbers = numberToString.length;

    if (number === 0) {
        return 'zero';
    }
    if (lengthNumbers === 1) {
        return numbers[number - 1];
    }
    if (lengthNumbers === 2 && number < 20) {
        return numbers[number - 1];
    } else if (lengthNumbers === 2 && number % 10 === 0) {
        return tens[numberToString[0] - 1];
    } else if (lengthNumbers === 2) {
        return `${tens[numberToString[0] - 1]} ${numbers[numberToString[1] - 1]}`;
    }
    if (lengthNumbers  === 3 && +(numberToString.slice(1)) === 0) {
        return `${numbers[numberToString[0] - 1]} hundred`;
    } else {
        return `${numbers[numberToString[0] - 1]} hundred ${toReadable((numberToString.slice(1)))}`;
    }
}

