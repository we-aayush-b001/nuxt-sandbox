<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
    <h1 class="text-4xl font-bold text-red-500">
      {{ error?.statusCode }}
    </h1>

    <p class="text-lg mt-2 text-gray-700">
      {{ error?.message }}
    </p>

    <button
      class="mt-6 px-4 py-2 bg-black text-white rounded"
      @click="handleError"
    >
      Go Home
    </button>
  </div>
</template>