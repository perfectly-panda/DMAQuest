<template>
  <div :id="tag">
    <p v-if="!shortVersion && content">{{ content[0] }} <Value :resValue="compValue" /> {{content[1]}}</p>
    <p v-else-if="content">{{content[2]}}: <Value :resValue="compValue" /> / {{ maxValue }}</p>
  </div>
</template>

<script setup lang="ts">
  import Value from '@/components/story/Value.vue'
  import { computed } from 'vue';

  const props = defineProps({
    tag: String,
    content: Array<string>,
    shortVersion: Boolean,
    resValue: Number,
    maxValue: Number,
  })

  const compValue = computed(() => (props.resValue?.toFixed(2) ?? 0).toString())
</script>