export function isNationalTeachersDay() {
    const date = new Date();
    return date.getDate() === 25 && date.getMonth() === 10;
}