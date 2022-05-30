export function EmptyCheck(info, hasEmpty, setHasEmpty) {
    let isEmpty = false;

    if (info.petName === '') {
        //console.log('name empty');
        isEmpty = true;
    }
    if (info.year === '') {
        //console.log('year empty');
        isEmpty = true;
    }
    if (info.month === '') {
        //console.log('month empty');
        isEmpty = true;
    }
    if (info.date === '') {
        //console.log('date empty');
        isEmpty = true;
    }
    if (info.gender === '') {
        //console.log('gender empty');
        isEmpty = true;
    }

    return isEmpty;
}
