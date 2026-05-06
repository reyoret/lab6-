import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Lesson } from '../types'

export const useScheduleStore = defineStore('schedule', () => {
  const lessons = ref<Lesson[]>([
    {
      id: 1,
      instrument: 'Фортепіано',
      teacher: 'О. Петренко',
      time: '10:00',
      day: 'Понеділок',
      level: 'Початковий',
    },
    {
      id: 2,
      instrument: 'Гітара',
      teacher: 'М. Бондар',
      time: '12:00',
      day: 'Понеділок',
      level: 'Середній',
    },
    {
      id: 3,
      instrument: 'Скрипка',
      teacher: 'Т. Сидоренко',
      time: '14:00',
      day: 'Вівторок',
      level: 'Початковий',
    },
    {
      id: 4,
      instrument: 'Вокал',
      teacher: 'І. Коваленко',
      time: '16:00',
      day: 'Середа',
      level: 'Середній',
    },
    {
      id: 5,
      instrument: 'Сольфеджіо',
      teacher: 'Л. Марченко',
      time: '11:00',
      day: 'Четвер',
      level: 'Базовий',
    },
    {
      id: 6,
      instrument: 'Музична грамота',
      teacher: 'Н. Савчук',
      time: '13:00',
      day: 'П’ятниця',
      level: 'Базовий',
    },
  ])

  const selectedDay = ref<string>('Усі')

  const filteredLessons = computed(() => {
    if (selectedDay.value === 'Усі') {
      return lessons.value
    }

    return lessons.value.filter((lesson) => lesson.day === selectedDay.value)
  })

  const lessonsPerDay = computed(() => {
    const result: Record<string, number> = {}

    lessons.value.forEach((lesson) => {
      result[lesson.day] = (result[lesson.day] || 0) + 1
    })

    return result
  })

  function setDay(day: string) {
    selectedDay.value = day
  }

  return {
    lessons,
    selectedDay,
    filteredLessons,
    lessonsPerDay,
    setDay,
  }
})