<script setup lang="ts">
import {Editor} from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight'
import frontmatter from '@bytemd/plugin-frontmatter'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import breaks from '@bytemd/plugin-breaks'
import 'bytemd/dist/index.css'
import 'juejin-markdown-themes/dist/juejin.min.css'
import {ref} from 'vue'

const mdPlugins = ref([
  gfm(),
  gemoji(),
  highlight(),
  frontmatter(),
  mediumZoom(),
  breaks()
])

type Props = {
  editorValue: string,
  onChange: (value: string) => void
}

const props = withDefaults(defineProps<Props>(), {
  editorValue: () => '',
  onChange: (value: string) => {}
})
</script>

<template>
  <Editor style="width: 100%" :value="props.editorValue" :plugins="mdPlugins" @change="props.onChange"/>
</template>