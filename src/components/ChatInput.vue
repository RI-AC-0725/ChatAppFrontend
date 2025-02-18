<script setup>
import { ref } from "vue";
//ListViewへ渡す変数を用意
const number = ref("");
let name = ref("");
let nowName = structuredClone(name);
let day = "";
const message = ref("");



//日付取得 yyyy/MM/dd-HH:mm:ss
const date = new Date();
day = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "-" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//投稿ボタン
function onSubmitForm() {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const newItem = {
    number: items.length + 1,
    name: name.value,
    day: day,
    message: message.value,
  };
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
}

</script>

<template>
  <form @submit="onSubmitForm">
    <label>HN<input type="text" v-model="name"></label><br>
    <label>現在のHN:{{ nowName }}</label>
    <br>
    <textarea v-model="message"></textarea>
    <button style="submit" @click="tweet">投稿</button>
    <p>{{ name }}</p>
  </form>
</template>

<style>
textarea {
  field-sizing: content;  
  min-width: 150px;
  max-width: 90%;
  min-height: min-content;
}
</style>