<template>
    <div class="slotss">
      <slot name="plate-header"></slot>
      <slot name="plate-content"></slot>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
   .slotss {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    margin: 35px auto;
     max-width: 640px;
      font-size: 10px;
      font-weight: bold;
      background: whitesmoke;
      padding: 10px;
      color: #1f1f1f;
    }
   
  </style>