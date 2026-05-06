<template>
  <div class="layout">
    <header class="site-header">
      <h1>Музична школа "Гармонія"</h1>
      <p>Лабораторна робота №6 - Vue 3 + TypeScript + Pinia + Router</p>
    </header>

    <nav class="site-nav">
  <RouterLink to="/">Головна</RouterLink>
  <RouterLink to="/courses">Курси</RouterLink>
  <RouterLink to="/schedule">Розклад</RouterLink>
  <RouterLink to="/profile">Профіль</RouterLink>
    </nav>

    <main class="site-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.site-header {
  background: linear-gradient(135deg, #2d0040, #9b59b6);
  color: white;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.site-nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  background: white;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.site-nav a {
  text-decoration: none;
  color: #2d0040;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 10px;
}

.site-nav a.router-link-active {
  background: #9b59b6;
  color: white;
}

.site-main {
  background: #ffffff;
  border-radius: 20px;
  min-height: 400px;
  box-shadow: 0 8px 24px rgba(45, 0, 64, 0.08);
}
</style>