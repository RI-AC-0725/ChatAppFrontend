<script setup>
import { ref } from "vue";
const title = ref("");
const msg = ref(true);


//作成ボタン
function onCreatebtn() {
  const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
  const room = {
  number: rooms.length + 1,
  name: title.value,
  };
  rooms.push(room);
  localStorage.setItem("rooms", JSON.stringify(rooms));
};
function isOnclick() {
  msg.value = !msg.value;
};
</script>
<template>
  <div>
    <router-link to="/">メイン画面へ戻る</router-link>
    <h1>チャットルームを作成する</h1>
    <h2>部屋の名前：<input type="text" v-model="title"/></h2>
  </div>
  
  <form @submit="onCreatebtn">
    <!-- ボタンが押されたら表示を切り替え→ルームが作成されました -->
    <button @click="isOnclick">ルーム作成</button>
    <div>
      <!--<label V-if="msg">部屋が作成されました。</label>-->
    </div>
  </form>
  <button><router-link to="/ChatApp">チャットルームへ</router-link></button>
</template>

<script>
export default {
  name: 'RoomCreate'
}
</script>  