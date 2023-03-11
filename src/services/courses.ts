import api from './api';
import cursosMock from '../cursosMock.json';

class CoursesService {
  constructor() {}

  async get() {
    try {
      return cursosMock.cursos;
      const response = await api.get('/cursos');
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export default CoursesService;
