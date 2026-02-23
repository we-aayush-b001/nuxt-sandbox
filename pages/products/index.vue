<template>
    <div>
        <div>
            <div v-for="product in products" :id="product.id">
             <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: "products" 
  })

  const {data:products} = await useFetch('https://fakestoreapi.com/products');

</script>