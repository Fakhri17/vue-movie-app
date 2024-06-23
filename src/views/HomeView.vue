<template>
  <div class="home bg-white dark:bg-black">
    <Navbar />
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar
  },
}
</script>