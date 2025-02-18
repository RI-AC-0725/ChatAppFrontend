<script setup>
//ローカルストレージからデータを取得
const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
</script>

<template>
    <h1>該当するカテゴリーの部屋を表示</h1>
    <div v-for="room in rooms" :key="room.number">
    <li>{{ room.name }} </li>
    <hr>
  </div>
</template>