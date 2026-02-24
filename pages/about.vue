<template>
    <div>
        <h2 class="text-green-800">About Page</h2>
    </div>
    <div>
      {{ data?.message }}
    </div>
</template>


<script setup>
 
 const {data} = await useFetch('/api/ninja?name=aayush');  //example of Get Api
 

</script>