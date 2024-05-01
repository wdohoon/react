import React from "react";

const students = [
    {
        id : 1,
        name: "dohoon",
    },
    {
        id : 2,
        name: "wondo",
    },
    {
        id : 3,
        name: "hoondo",
    },
    {
        id : 4,
        name: "wonhoon",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;