import { ref, computed } from 'vue'

export default function useTimer() {
  // data
  const count = ref(0)
  const startTime = ref(0)
  const intervalId = ref(0)
  const timerTime = ref(0)

  // computed
  const viewTimerTime = computed(() => (timerTime.value / 1000).toFixed(1))
  const isRunning = computed(() => !!intervalId.value)

  // methods
  const startTimer = () => {
    intervalId.value = setInterval(() => {
      timerTime.value = (Date.now() - startTime.value)
    }, 10)
  }
  const start = () => {
    startTime.value = Date.now()
    startTimer()
  }
  const stop = () => {
    clearInterval(intervalId.value)
    intervalId.value = 0
  }

  return {
    count,
    startTime,
    timerTime,
    viewTimerTime,
    isRunning,
    start,
    stop,
  }
}
