import { ref } from 'vue'

const storedStudents =
  JSON.parse(localStorage.getItem('students')) || []

const students = ref(storedStudents)

export function useStudents () {

    const saveToStorage = () => {
        localStorage.setItem(
            'students',
            JSON.stringify(students.value)
        )
    }
  const addStudent = (student) => {
    students.value.push(student)
    saveToStorage()
  }
  const deleteStudent = (id) => {
    students.value = students.value.filter(
        student => student.id !==id
    )
    saveToStorage()
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
      saveToStorage()
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
