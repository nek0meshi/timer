<template>
  <div>
    <h1>Timer</h1>
    <p class="time">{{ viewTimerTime }}</p>
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
  },
  created() {
    // キーコードによる動作の登録
    window.addEventListener("keydown", this.keyAction);
  },
  methods: {
    keyAction(e) {
      switch (e.keyCode) {
        case 32: // スペース
          if (this.isRunning) {
            this.stop()
          } else {
            this.start()
          }
      }
    },
  },
})
</script>

<style scoped>
.time {
  font-size: 60px;
}
</style>
