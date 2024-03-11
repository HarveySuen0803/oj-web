<script setup lang="ts">
import MdEditor from '@/component/md-editor.vue'
import {ref} from 'vue'
import api from '@/utils/api.ts'

const questionForm: any = ref({
  title: '',
  tags: [],
  answer: '',
  content: '',
  judgeConfig: {},
  judgeCase: []
})

const onContentChange = (value: string) => {
  questionForm.value.content = value
}

const onAnswerChange = (value: string) => {
  questionForm.value.answer = value
}

const onAdd = () => {
  questionForm.value.judgeCase.push({
    input: '',
    output: ''
  })
}

const onDelete = (index: number) => {
  questionForm.value.judgeCase.splice(index, 1)
}

const onSubmit = async () => {
  const rep: any = await api.post('/question', questionForm.value)
  console.log(rep)
}
</script>

<template>
  <a-form
      :model="questionForm"
      label-align="left"
      :style="{width: '80%', margin: '20px auto auto'}"
      auto-label-width
  >
    <a-form-item field="title" label="Question Title">
      <a-input v-model="questionForm.title" placeholder="Please input question title"/>
    </a-form-item>
    <a-form-item field="tags" label="Question Tags">
      <a-input-tag v-model="questionForm.tags" placeholder="Please input question tags" allow-clear/>
    </a-form-item>
    <a-form-item field="content" label="Question Content">
      <MdEditor :editor-value="questionForm.content" @change="onContentChange"/>
    </a-form-item>
    <a-form-item field="answer" label="Question Answer">
      <MdEditor :editor-value="questionForm.answer" @change="onAnswerChange"/>
    </a-form-item>

    <a-form-item label="Judge Config" :content-flex="false" :merge-props="false">
      <a-row :gutter="8">
        <a-col :span="8">
          <a-form-item field="judgeConfig.timeLimit" label="Time Limit" no-style>
            <a-input-number
                v-model="questionForm.judgeConfig.timeLimit"
                placeholder="Please input time limit"
                :min="0"
                size="large"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item field="judgeConfig.memoryLimit" label="Memory Limit" no-style>
            <a-input-number
                v-model="questionForm.judgeConfig.memoryLimit"
                placeholder="Please input memory limit"
                :min="0"
                size="large"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item field="judgeConfig.stackLimit" label="Stack Limit" no-style>
            <a-input-number
                v-model="questionForm.judgeConfig.stackLimit"
                placeholder="Please input stack limit"
                :min="0"
                size="large"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form-item>

    <a-form-item
        :label="`Test Case ${index + 1}`"
        v-for="(judgeCaseItem, index) of questionForm.judgeCase" :key="index"
        :content-flex="false" :merge-props="false"
    >
      <a-row :gutter="10">
        <a-col flex="5">
          <a-form-item :field="`form.judgeCase[${index}].input`" validate-trigger="input" :key="index" no-style>
            <a-input v-model="judgeCaseItem.input" placeholder="Please input input-case"/>
          </a-form-item>
        </a-col>
        <a-col flex="5">
          <a-form-item :field="`form.judgeCase[${index}].output`" validate-trigger="input" :key="index" no-style>
            <a-input v-model="judgeCaseItem.output" placeholder="Please input output-case"/>
          </a-form-item>
        </a-col>
        <a-col flex="0">
          <a-button status="danger" @click="onDelete(index)">Delete</a-button>
        </a-col>
      </a-row>
    </a-form-item>

    <a-form-item>
      <a-space>
        <a-button @click="onAdd" type="outline" status="success" style="min-width: 200px">Add Test Case</a-button>
        <a-button type="primary" style="min-width: 200px" @click="onSubmit">Submit</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<style scoped>
</style>