import fetch from 'unfetch';



export const getAllStudents= () => fetch('api/person/all');
export const addNewPerson = student => fetch('api/person/add', {
    headers:{
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(student)
});