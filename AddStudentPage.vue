<template>
  <q-page class="q-pa-md">
    <h4>Add Student</h4>

    <q-input v-model="name" label="Name" />
    <q-input v-model="course" label="Course" class="q-mt-sm" />

    <q-btn
      label="Add Student"
      color="primary"
      class="q-mt-md"
      @click="addStudentHandler"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Notify } from 'quasar'
import { useRouter } from 'vue-router'
import { useStudents } from 'src/useStudents'

const name = ref('')
const course = ref('')
const router = useRouter()

const { addStudent } = useStudents()

const addStudentHandler = () => {
  if (!name.value || !course.value) {
    Notify.create({
      message: 'Please fill all fields',
      color: 'negative'
    })
    return
  }

  addStudent({
    id: Date.now(),
    name: name.value,
    course: course.value
  })

  Notify.create({
    message: 'Student added successfully',
    color: 'positive'
  })

  router.push('/students')
}
 
</script>

