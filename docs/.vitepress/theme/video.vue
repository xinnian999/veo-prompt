<template>
  <div class="video-container">
    <video :src="src" controls loop></video>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style>
.video-container {
  margin: 30px auto;
}
</style>
