export function DateCalculator(year, month, date) {
    var one_day = 1000 * 60 * 60 * 24;

    var today = new Date();
    month -= 1;
    var birthDate = new Date(year, month, date);
    return Math.floor((today - birthDate) / one_day);
}
