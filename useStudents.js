import { ref } from 'vue'

const students = ref([])

export function useStudents () {
  const addStudent = (student) => {
    students.value.push(student)
  }
  const deleteStudent = (id) => {
    students.value = students.value.filter(
        student => student.id !==id
    )
  }
  const getStudentbyId = (id) => {
    return students.value.find (
        student => student.id ===id
    )
  }

  const updateStudent = (updatedStudent) => {
    const index = students.value.findIndex(
      s => s.id === updatedStudent.id
    )
    if (index !== -1) {
      students.value[index] = updatedStudent
    }
  }
  return {
    students,
    addStudent,
    deleteStudent,
    getStudentbyId,
    updateStudent
  }
}
