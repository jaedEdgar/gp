const courses = [
  {
    _id: 'anyid1',
    title: 'mi titulo',
    teacher: 'profe',
    description: 'descripcion',
    topic: 'programacion'
  },  {
    _id: 'anyid2',
    title: 'mi titulo 1',
    teacher: 'profe',
    description: 'descripcion',
    topic: 'programacion'
  } , {
    _id: 'anyid3',
    title: 'mi titulo 2' ,
    teacher: 'profe',
    description: 'descripcion',
    topic: 'programacion'
  }
];
module.exports = {
  getCourses: () => courses
};
