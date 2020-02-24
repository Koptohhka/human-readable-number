module.exports = function toReadable (num) {
    let numToStr = num.toString();

    let numberObject = {
        lowerThanTen: {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty'
        },

        highterThanTen: {
            10: 'ten',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        }

    }

    if (num <= 10) {
        return numberObject.lowerThanTen[num.toString()];
    } else if (num > 10 && num <= 20) {
        return numberObject.lowerThanTen[numToStr];
    } else if (numToStr[numToStr.length - 1] === '0' && numToStr.length < 3) {
        return numberObject.highterThanTen[numToStr];
    } else if (num > 20 && num < 100) {
        return numberObject.highterThanTen[Math.floor((numToStr / 10)) + '0']  + ' ' + numberObject.lowerThanTen[numToStr[numToStr.length - 1]];
    } else if (num >= 100 && num < 1000) {

        if (num === 100) {
            return 'one hundred';
        } else if (numToStr[numToStr.length - 1] === '0' && numToStr[numToStr.length - 2] === '0') {
            return numberObject.lowerThanTen[numToStr[0]] + ' ' + 'hundred';
        } else if (numToStr[numToStr.length - 1] === '0') {
            return numberObject.lowerThanTen[numToStr[0]] + ' ' + 'hundred' + ' ' + numberObject.highterThanTen[numToStr[numToStr.length - 2] + numToStr[numToStr.length - 1]];
        } else if ((numToStr[numToStr.length - 2] + numToStr[numToStr.length - 1]) >= 01 && (numToStr[numToStr.length - 2] + numToStr[numToStr.length - 1]) < 10) {
            return numberObject.lowerThanTen[numToStr[0]] + ' ' + 'hundred' + ' ' + numberObject.lowerThanTen[numToStr[numToStr.length - 1]];
        } else if ((numToStr[numToStr.length - 2] + numToStr[numToStr.length - 1]) >= 11 && (numToStr[numToStr.length - 2] + numToStr[numToStr.length - 1]) <= 20) {
            return numberObject.lowerThanTen[numToStr[0]] + ' ' + 'hundred' + ' ' + numberObject.lowerThanTen[numToStr[numToStr.length - 2] + numToStr[numToStr.length - 1]];
        } else {
            return numberObject.lowerThanTen[numToStr[0]] + ' ' + 'hundred' + ' ' + numberObject.highterThanTen[numToStr[numToStr.length - 2] + '0'] + ' ' + numberObject.lowerThanTen[numToStr[numToStr.length - 1]];
        }

    }

}