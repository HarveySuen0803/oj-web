<script setup lang="ts">
import CodeEditor from '@/component/code-editor.vue'
import {ref} from 'vue'

const codeEditorValue = ref<string>('')
const codeEditorLanguage = ref<string>('java')
const onChange = (value: string) => {
  codeEditorValue.value = value
}
</script>

<template>
  <h1>Home View</h1>
  <code-editor :code-editor-value="codeEditorValue" :code-editor-language="codeEditorLanguage" :on-change="onChange"></code-editor>
</template>

<style scoped>
</style>