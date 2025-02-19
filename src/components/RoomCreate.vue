<script setup>
import { ref } from "vue";
const title = ref("");
const msg = ref(true);
const category =ref("");
let day = "";

//日付取得 yyyy/MM/dd-HH:mm:ss
const date = new Date();
day = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "-" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//作成ボタン
function onCreatebtn() {
  const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
  const room = {
  number: rooms.length + 1,
  name: title.value,
  tag: category.value,
  };
  rooms.push(room);
  localStorage.setItem("rooms", JSON.stringify(rooms));
  
  //itemsに最初の投稿を格納
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const newItem = {
    roomNumber: rooms.length,
    tweet: {
      number: items.length + 1,
      name: "管理者",
      day: day,
      message: title.value + "の部屋が作成されました。",
    }
  }
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
};

function isOnclick() {
  msg.value = !msg.value;
};
</script>
<template>
  <div>
    <router-link to="/">メイン画面へ戻る</router-link>
    <h1>チャットルームを作成する</h1>
    <h2>
      部屋の名前：<input type="text" v-model="title"/><br>
      カテゴリー：<input type="text" v-model="category"/>
    </h2>
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