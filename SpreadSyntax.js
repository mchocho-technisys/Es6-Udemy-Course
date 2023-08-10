// Es lo contrario que Rest, tenemos un array y queremos dividirlo en diferentes parámetros.
const list = (a,b,c,d) => {
    return a + ' ' + b + ' ' + c + ' ' + d;
};

const letters = ["a", "b", "c", "d"];

list(...letters);