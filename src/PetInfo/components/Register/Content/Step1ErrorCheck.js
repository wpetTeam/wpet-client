const handleHasError = (hasError, setHasError, name) => {
    setHasError({
        ...hasError,
        [name]: true,
    });
};

export function ErrorCheck({ petInfo, hasError, setHasError }) {
    var isError = false;
    console.log(petInfo);

    if (petInfo.name === '') {
        handleHasError(hasError, setHasError, 'name');
        isError = true;
    }
    if (petInfo.year === '') {
        handleHasError(hasError, setHasError, 'year');
        isError = true;
    }
    if (petInfo.month === '') {
        handleHasError(hasError, setHasError, 'month');
        isError = true;
    }
    if (petInfo.date === '') {
        handleHasError(hasError, setHasError, 'date');
        isError = true;
    }
    if (petInfo.gender === '') {
        handleHasError(hasError, setHasError, 'gender');
        isError = true;
    }

    return isError;
}
