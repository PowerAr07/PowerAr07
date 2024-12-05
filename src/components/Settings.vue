<template>
    <div class="settings">
      <div>
        <label>Font Size:</label>
        <button @click="changeFontSize('increase')">+</button>
        <button @click="changeFontSize('decrease')">-</button>
      </div>
      <div>
        <label>Theme Color:</label>
        <select v-model="theme" @change="applyTheme">
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        colors: ['red', 'blue', 'green', 'yellow', 'pink'],
        theme: 'blue',
      };
    },
    methods: {
      changeFontSize(action) {
        const root = document.documentElement;
        const currentSize = parseInt(getComputedStyle(root).fontSize);
        root.style.fontSize = action === 'increase' ? `${currentSize + 1}px` : `${currentSize - 1}px`;
      },
      applyTheme() {
        document.body.style.backgroundColor = this.theme;
      },
    },
  };
  </script>
  
  <style>
  /* Add settings styling */
  </style>
  