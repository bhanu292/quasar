<template>
  <q-page class="q-pa-md">
    <h4>Edit Student</h4>

    <q-input v-model="name" label="Name" />
    <q-input
      v-model="course"
      label="Course"
      class="q-mt-sm"
    />

    <q-btn
      label="Update Student"
      color="primary"
      class="q-mt-md"
      @click="updateStudentHandler"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Notify } from 'quasar'
import { useStudents } from 'src/useStudents'

const route = useRoute()
const router = useRouter()

const { getStudentById, updateStudent } = useStudents()

const name = ref('')
const course = ref('')
const studentId = Number(route.params.id)

onMounted(() => {
  const student = getStudentById(studentId)
  if (student) {
    name.value = student.name
    course.value = student.course
  }
})

const updateStudentHandler = () => {
  updateStudent({
    id: studentId,
    name: name.value,
    course: course.value
  })

  Notify.create({
    message: 'Student updated successfully',
    color: 'positive'
  })

  router.push('/students')
}
</script>
