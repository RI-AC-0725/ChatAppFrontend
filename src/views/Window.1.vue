<script setup>
import CategoryListView from "../components/CategoryListView.vue";
import roomListView from "../components/RoomListView.vue";
</script>

<template>
  <div>
    <h1>オープンチャットアプリ</h1>
    <h3>概要：～</h3><br>
    <router-link to="/ChatApp">チャット画面へ遷移する</router-link>
  </div>
  <div>
    <router-link to="/RoomCreate">部屋を作成</router-link>
  </div>
  <div>
    <router-link to="/RoomListView">部屋一覧へ</router-link>
  </div>
  <hr>
  <h2>カテゴリー一覧</h2>
  <CategoryListView></CategoryListView>
</template>

<script>
export default {
  name: 'window1'
}
</script>  