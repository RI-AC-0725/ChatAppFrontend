<script setup>
//ローカルストレージからデータを取得
const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
</script>

<template>
  <h1>各部屋を表示</h1>
  <table border="1" v-for="room in rooms" :key="room.number">
    <tr>
      <td>{{ room.name }}</td>
    </tr>
  </table>
</template>