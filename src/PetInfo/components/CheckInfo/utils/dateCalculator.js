export function DateCalculator(year, month, date) {
    var one_day = 1000 * 60 * 60 * 24;
    var today = new Date();
    var birthDate = new Date(year, month, date);

    console.log(Math.round((today.getTime() - birthDate.getTime()) / one_day));
}
