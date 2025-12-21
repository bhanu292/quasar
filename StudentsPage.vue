<template>
  <q-page class="q-pa-md">
    <div class="row items-center justify-between">
      <h4>Student List</h4>

      <q-btn
        label="Add Student"
        color="primary"
        icon="add"
        to="/add-student"
      />
    </div>

    <q-list bordered class="rounded-borders q-mt-md">
      <q-item
        v-for="student in students"
        :key="student.id"
      >
        <q-item-section>
          {{ student.name }} - {{ student.course }}
        </q-item-section>

    
        <q-item-section side>

  <q-btn
    icon="edit"
    color="primary"
    flat
    round
    :to="`/edit-student/${student.id}`"
  />

  <q-btn
    icon="delete"
    color="negative"
    flat
    round
    @click="removeStudent(student.id)"
  />
</q-item-section>

      </q-item>


      <div v-if="students.length === 0" class="q-pa-md text-grey">
        No students added yet
      </div>
    </q-list>

    <q-btn
      label="Back to Home"
      color="grey"
      to="/"
      class="q-mt-md"
    />
  </q-page>
</template>

<script setup>
import { Notify } from 'quasar'
import { useStudents } from 'src/useStudents'

const { students,deleteStudent } = useStudents()

const removeStudent = (id) => {
    deleteStudent(id)

    Notify.create({
    message: 'Student deleted',
    color: 'negative'
  })
}
</script>
