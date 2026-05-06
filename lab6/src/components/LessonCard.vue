<script setup lang="ts">
import type { Lesson } from '../types'

defineProps<{
  item: Lesson
}>()
</script>

<template>
  <div class="lesson-card">
    <h3>{{ item.instrument }}</h3>
    <p><strong>Викладач:</strong> {{ item.teacher }}</p>
    <p><strong>Час:</strong> {{ item.time }}</p>
    <p><strong>День:</strong> {{ item.day }}</p>
    <p><strong>Рівень:</strong> {{ item.level }}</p>
  </div>
</template>

<style scoped>
.lesson-card {
  border: 1px solid #dbc9e6;
  border-radius: 16px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(45, 0, 64, 0.08);
}

.lesson-card h3 {
  margin-bottom: 10px;
  color: #2d0040;
}
</style>