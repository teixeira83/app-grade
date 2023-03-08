import api from './api';

class CoursesService {
  constructor() {}

  async get() {
    try {
      const response = await api.get('/cursos');
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export default CoursesService;
