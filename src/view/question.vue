<script setup lang="ts">
import {onMounted, reactive, ref, watch} from 'vue'
import api from '@/utils/api.ts'

const questionPage: any = ref({})

const questionPageColumns: any = ref([
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    title: 'Content',
    dataIndex: 'content'
  },
  {
    title: 'Answer',
    dataIndex: 'answer'
  },
  {
    title: 'Submit Num',
    dataIndex: 'submitNum'
  },
  {
    title: 'Accepted Num',
    dataIndex: 'acceptedNum'
  },
  {
    title: 'Optional',
    slotName: 'optional'
  }
])

const pageDto: any = ref({
  current: 1,
  pageSize: 5
})

const getQuestionPage = async () => {
  try {
    const rep: any = await api.post('/question/list/page', pageDto.value)
    questionPage.value.records = rep.records
    questionPage.value.total = Number(rep.total)
    questionPage.value.pages = rep.pages
  } catch (e) {
    console.log(e)
  }
}

const onQuestionPageChange = (current: number) => {
  pageDto.value.current = current
}

onMounted(() => {
  getQuestionPage()
})

watch(pageDto.value, () => {
  getQuestionPage()
})

const onDelete = async (id: number) => {
  const rep = await api.delete(`/question/${id}`)
  await getQuestionPage()
}

const onUpdate = async (id: number) => {

}
</script>

<template>
  <a-table
      :columns="questionPageColumns"
      :data="questionPage.records"
      :style="{width: '80%', margin: '20px auto auto'}"
      :pagination="{
        showTotal: true,
        pageSize: pageDto.pageSize,
        current: pageDto.current,
        total: questionPage.total,
      }"
      @page-change="onQuestionPageChange"
  >
    <template #optional="{ record }">
      <a-space>
        <a-button>Select</a-button>
        <a-button @click="onUpdate(record.id)">Update</a-button>
        <a-button @click="onDelete(record.id)">Delete</a-button>
      </a-space>
    </template>
  </a-table>
</template>