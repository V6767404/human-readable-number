module.exports = function toReadable (number) {
    
    let oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let threeDigit = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundreds = Math.floor(number / 100);
    let dozens = number % 100;
    let units = dozens % 10;
    let result = [];

    if (number === 0)
        return 'zero';

    if (hundreds > 0) {
        result.push(oneDigit[hundreds] + ' hundred');
    }
    
    if (dozens >= 20) {
        result.push(threeDigit[Math.floor(dozens / 10)]);
        if (units !== 0) {
            result.push(oneDigit[units]);
        }
    } else if (dozens >= 10) result.push(twoDigit[dozens % 10]);
    else if (dozens !== 0) result.push(oneDigit[units]);

    // return result;
    return result.join(' ');
  
}
