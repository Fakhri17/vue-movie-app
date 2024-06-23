

<template>
  <RouterView />
  <div>
    <input v-model="name" type="text">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe'
    }
  }
}
</script>
