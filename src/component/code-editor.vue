<script setup lang="ts">
import * as monaco from 'monaco-editor'
import {editor} from 'monaco-editor'
import {onMounted, ref, toRaw} from 'vue'

const codeEditorDom = ref<HTMLDivElement>()
const codeEditor = ref<editor.IStandaloneCodeEditor>()

type WorkModule = {
  default: new () => Worker
}

type Props = {
  codeEditorValue: string,
  codeEditorLanguage: string,
  onChange: (value: string) => void
}

const props = withDefaults(defineProps<Props>(), {
  codeEditorValue: () => '',
  codeEditorLanguage: () => '',
  onChange: (value: string) => {}
})

onMounted(() => {
  self.MonacoEnvironment = {
    getWorker: async function (workerId: string, label: string) {
      let workerModule: WorkModule
      switch (label) {
        case 'json':
          workerModule = await import('monaco-editor/esm/vs/language/json/json.worker?worker')
          break
        case 'css':
        case 'scss':
        case 'less':
          workerModule = await import('monaco-editor/esm/vs/language/css/css.worker?worker')
          break
        case 'html':
        case 'handlebars':
        case 'razor':
          workerModule = await import('monaco-editor/esm/vs/language/html/html.worker?worker')
          break
        case 'typescript':
        case 'javascript':
          workerModule = await import('monaco-editor/esm/vs/language/typescript/ts.worker?worker')
          break
        default:
          workerModule = await import('monaco-editor/esm/vs/editor/editor.worker?worker')
      }
      return new workerModule.default()
    }
  }

  codeEditor.value = monaco.editor.create(codeEditorDom.value, {
    value: props.codeEditorValue,
    language: props.codeEditorLanguage,
    selectOnLineNumbers: true,
    theme: 'vs',
    colorDecorators: true
  })

  codeEditor.value.onDidChangeModelContent(() => {
    props.onChange(toRaw(codeEditor.value).getValue())
  })
})
</script>

<template>
  <div ref="codeEditorDom" class="editor"></div>
</template>

<style scoped>
.editor {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>