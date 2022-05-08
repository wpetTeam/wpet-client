export const handleBreedPicker = (name, breed, setBreed) => {
    if (breed.length < 3) {
        if (!breed.includes(name)) {
            setBreed((breed) => [...breed, name]);
        }
    }
    if (breed.includes(name)) {
        handleDeleteBreed(name, breed, setBreed);
    }
};

export const handleDeleteBreed = (name, breed, setBreed) => {
    setBreed(breed.filter((item, idx) => idx !== breed.indexOf(name)));
};

export const breedNameHandler = (name) => {
    var blank_index = name.indexOf(' ');
    if (blank_index !== -1 && name.length >= 7) {
        var new_line_name = (
            <>
                {name.slice(0, blank_index)}
                <br />
                {name.slice(blank_index + 1)}
            </>
        );
    } else new_line_name = name;
    return new_line_name;
};
