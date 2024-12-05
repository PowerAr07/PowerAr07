<template>
  <div class="history">
    <ul>
      <li v-for="(item, index) in history" :key="index">{{ item }}</li>
    </ul>
    <button @click="resetHistory">Reset History</button>
  </div>
</template>

<script>
export default {
  props: ['history'],
  methods: {
    resetHistory() {
      this.$emit('reset-history');
    },
  },
};
</script>

<style>
/* Add history styling */
</style>

