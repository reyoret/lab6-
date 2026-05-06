<script setup lang="ts">
import { useScheduleStore } from '../stores/useScheduleStore'
import LessonCard from '../components/LessonCard.vue'

const scheduleStore = useScheduleStore()

const days = ['Усі', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця']
</script>

<template>
  <section class="page">
    <h2>Розклад занять</h2>

    <div class="filter-box">
      <label for="day">Фільтр за днем:</label>
      <select
        id="day"
        :value="scheduleStore.selectedDay"
        @change="scheduleStore.setDay(($event.target as HTMLSelectElement).value)"
      >
        <option v-for="day in days" :key="day" :value="day">
          {{ day }}
        </option>
      </select>
    </div>

    <div class="stats-box">
      <h3>Кількість занять по днях</h3>
      <ul>
        <li v-for="(count, day) in scheduleStore.lessonsPerDay" :key="day">
          {{ day }} - {{ count }}
        </li>
      </ul>
    </div>

    <div class="lesson-grid">
      <LessonCard
        v-for="lesson in scheduleStore.filteredLessons"
        :key="lesson.id"
        :item="lesson"
      />
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 20px;
}

.filter-box,
.stats-box {
  margin-top: 16px;
  margin-bottom: 20px;
}

select {
  margin-left: 10px;
  padding: 8px 10px;
  border-radius: 8px;
}

.lesson-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.stats-box ul {
  padding-left: 20px;
}
</style>