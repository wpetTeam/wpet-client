export function EmptyCheck(info, gender, month, date) {
    let isEmpty = false;

    if (info.petName === '') {
        //console.log('name empty');
        isEmpty = true;
    }
    if (info.year === '') {
        //console.log('year empty');
        isEmpty = true;
    }
    if (month === '') {
        //console.log('month empty');
        isEmpty = true;
    }
    if (date === '') {
        //console.log('date empty');
        isEmpty = true;
    }
    if (gender === '') {
        //console.log('gender empty');
        isEmpty = true;
    }

    return isEmpty;
}
