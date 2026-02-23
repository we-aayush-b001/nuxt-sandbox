<template>
     <header class="header">
        <nav>
            <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
        </nav>
  </header>
  <div>
    <slot/>
  </div>
  <footer>
    <nav class="nav">
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/about" class="link">About</NuxtLink>
      <NuxtLink to="/products" class="link">Products</NuxtLink>
    </nav>
  </footer>
</template>

<style scoped>
.header {
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.nav {
  display: flex;
  gap: 20px;
}

.link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.link:hover {
  color: #007bff;
}
</style>