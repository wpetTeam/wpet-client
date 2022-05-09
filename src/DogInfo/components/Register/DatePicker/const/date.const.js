/* 날짜 picker */
export const MonthCalender = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function DateCalender(month) {
    const date = [];
    const month30 = [4, 6, 9, 11];

    if (month === 2) {
        for (let i = 1; i <= 29; i++) {
            date.push(i);
        }
    } else if (month30.includes(month)) {
        for (let i = 1; i <= 30; i++) {
            date.push(i);
        }
    } else {
        for (let i = 1; i <= 31; i++) {
            date.push(i);
        }
    }

    return date;
}
