<template>
  <div>
    <h1>Timer</h1>
    <p>{{ viewTimerTime }}</p>
    <button @click="start" :disabled="isRunning">Start</button>
    <button @click="stop" :disabled="!isRunning">Stop</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTimer from '../composable/use-timer'

export default defineComponent({
  name: 'Timer',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const timer = useTimer()

    return {
      ...timer,
    }
  }
})
</script>
