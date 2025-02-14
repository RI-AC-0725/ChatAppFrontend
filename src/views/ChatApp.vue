<script setup>
import chatInput from "../components/ChatInput.vue";
import chatListView from "../components/ChatListView.vue";
const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
</script>

<template>
  <div>
    <div>
      <!--末尾のタイトルを取得 TODO:部屋が一つもないとlengthでエラーがでる-->
      <h2>作成された部屋の名前：{{ rooms[rooms.length - 1].name }}の部屋</h2>
      <router-link to="/">メイン画面へ遷移する</router-link>
    </div>
    <chatInput></chatInput>
    <hr>
    <chatListView></chatListView>
  </div>
</template>

<style>
h2 {
  display: inline;
}
</style>

<script>
export default {
  name: 'ChatApp'
}
</script>  