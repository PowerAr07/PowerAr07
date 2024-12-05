<template>
  <div class="calculator">
    <div class="display">{{ current }}</div>
    <div class="buttons">
      <button v-for="btn in buttons" :key="btn" @click="handleClick(btn)">{{ btn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      buttons: [
        '7', '8', '9', '/', 
        '4', '5', '6', '*', 
        '1', '2', '3', '-', 
        'C', '0', '.', '+', 
        '=', 'Reset'
      ],
      history: [],
    };
  },
  methods: {
    handleClick(btn) {
      if (btn === '=') {
        try {
          const result = eval(this.current);
          this.history.push(`${this.current} = ${result}`);
          this.current = result;
        } catch {
          this.current = 'Error';
        }
      } else if (btn === 'C') {
        this.current = '';
      } else if (btn === 'Reset') {
        this.history = [];
        this.current = '';
      } else {
        this.current += btn;
      }
    },
  },
};
</script>

<style>
/* Add calculator styling */
</style>
