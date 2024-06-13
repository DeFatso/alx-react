const { Seq } = require('immutable');

export function printBestStudents(grades) {
    const result = Seq(grades)
        .filter(student => student.score >= 70)
        .map(student => ({
            score: student.score,
            firstName: capitalize(student.firstName),
            lastName: capitalize(student.lastName),
        }))
        .toObject();

    console.log(result);
}

export function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
