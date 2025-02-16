<script setup>
import roomListView from "../components/RoomListView.vue";
</script>

<template>
  <div>
    <h1>オープンチャットアプリ</h1>
    <h2>概要：～</h2><br>
    <router-link to="/ChatApp">チャット画面へ遷移する</router-link>
  </div>
  <div>
    <router-link to="/RoomCreate">部屋を作成</router-link>
  </div>
  <roomListView></roomListView>
</template>

<script>
export default {
  name: 'window1'
}
</script>  