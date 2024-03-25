import api from './api';
import cursosMock from '../cursosMock.json';

class CoursesService {
  constructor() {}

  async get() {
    try {
      const response = await api.get('/course');
      console.log('response')
      console.log(response.data)
      console.log('response')
      // return cursosMock.cursos;
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export default CoursesService;
