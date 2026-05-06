<template>
  <section class="page">
    <h2>Курси</h2>
    <div class="courses-grid">
      <div class="course-box">Фортепіано</div>
      <div class="course-box">Гітара</div>
      <div class="course-box">Скрипка</div>
      <div class="course-box">Вокал</div>
      <div class="course-box">Сольфеджіо</div>
      <div class="course-box">Музична грамота</div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 20px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.course-box {
  background: white;
  border: 1px solid #dbc9e6;
  border-radius: 14px;
  padding: 16px;
  text-align: center;
  font-weight: 700;
  color: #2d0040;
}
</style>