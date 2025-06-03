
import lessons from '../data/python_lessons_1_20.json';

export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === parseInt(id));
}

export function getAllLessons() {
  return lessons;
}
