<template>
     <header class="header">
    <nav class="nav">
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/about" class="link">About</NuxtLink>
      <NuxtLink to="/products" class="link">Products</NuxtLink>
    </nav>
  </header>
  <div>
    <slot/>
  </div>
</template>

<!-- In Nuxt, layouts/default.vue is automatically applied to all pages. If multiple layouts exist, the default layout is used unless a specific layout is defined in a page using definePageMeta({ layout: "layoutName" }). -->


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