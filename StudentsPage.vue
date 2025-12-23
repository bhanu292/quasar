<template>
  <q-page class="q-pa-md">
    <div class="row justify-between items-center q-mb-md">
      <h4>Student List</h4>

      <q-btn
        label="Add Student"
        color="primary"
        icon="add"
        to="/add-student"
      />
    </div>

    <q-input
  v-model="filter"
  label="Search student"
  outlined
  dense
  clearable
  class="q-mb-md"
>
  <template v-slot:append>
    <q-icon name="search" />
  </template>
</q-input>


    <q-table 
    :rows="students"
    :columns="columns"
    row-key="id"
    :filter="filter"
    v-model:pagination="pagination"
    :rows-per-page-options="[5,10,15]"
    :visible-columns="['id','name','course','actions']"
    no-data-label="No students added yet"
    >

   <template v-slot:body-cell-actions="props">
    <q-td align="center">
        <q-btn
      icon="edit"
      color="primary"
      flat
      round
      :to="`/edit-student/${props.row.id}`"
    /> 
  <q-btn
    icon="delete"
    color="negative"
    flat
    round
    @click="removeStudent(props.row.id)"
  />
  </q-td>
</template>
    </q-table>

    <q-btn
      label="Back"
      to="/"
      flat
      class="q-mt-md"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'    
import { Notify, Dialog } from 'quasar'
import { useStudents } from 'src/useStudents'

const filter = ref('')

const pagination = ref({
    page: 1,
    rowsPerPage: 5,
    sortBy: 'id',
    descending: false
})

const { students, deleteStudent } = useStudents()

const columns = [
  {
    name:'id',
    label:'ID',
    field:'id',
    align:'left',
    sortable: true
  },
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: true
  },
  {
    name: 'course',
    label: 'Course',
    field: 'course',
    align: 'left',
    sortable: true
  },
  {
    name: 'actions',
    label: 'Actions',
     align: 'center'
  }
]

const removeStudent = (id) => {
  Dialog.create({
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete this student?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    deleteStudent(id)

    Notify.create({
      message: 'Student deleted successfully',
      color: 'negative'
    })
  })
}
</script>
