import Teacher from './teacher.js';

export const state = {
  teachers: [],
};

export const loadTeachers = function () {
  state.teachers.push(
    new Teacher(
      '12',
      'ulf.bilting@hotmail.com',
      'xyz',
      'Ulf',
      'Bilting',
      ['Java', 'C++', 'C']
    ),
    new Teacher(
      '34',
      'michael.gustavsson@gmail.com',
      'qwerty',
      'Michael',
      'Gustavsson',
      ['C++', 'JavaScript', 'TypeScript', 'Angular', 'React', 'MSSQL']
    ),
    new Teacher(
      '56',
      'mikael.zetterstrom@hotmail.com',
      'password1',
      'Mikael',
      'Zetterström',
      ['C', 'C++']
    ),
    new Teacher(
      '78',
      'ulf.malmstrom@hotmail.com',
      'losenord',
      'Ulf',
      'Malmström',
      ['Visual Basic', 'Access', 'Excel']
    )
  );
};