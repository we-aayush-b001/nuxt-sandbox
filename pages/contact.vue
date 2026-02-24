<template>
    <div>
        <h2 class="text-green-800">Contact Page</h2>
    </div>
    <div>
      {{ data?.message }}
    </div>
</template>


<script setup>
 
 const {data} = await useFetch('/api/ninja?name=aayush',{
    method: 'post',
    body: {age:30}
 });  //example of Post Api
 

</script>