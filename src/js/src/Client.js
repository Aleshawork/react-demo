import fetch from 'unfetch';



export const getAllStudents= () => fetch('api/person/all');