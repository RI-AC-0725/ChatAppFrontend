<script >
/*　サンプルデータ
export default {
  data: () => ({
    items02: [
      {number: "1", name: "名無し", day: "2024/01/01 12:00:00", message: "テスト01"},
      {number: "2", name: "名無し1", day: "2024/01/02 12:00:00", message: "テスト０２"},
      {number: "3", name: "名無し", day: "2024/01/03 12:00:00", message: "test03"}
    ],
    item: {
      number: "",
      name: "",
      day: "",
      message: ""
    }
  })
};*/
</script>
<script setup>
//ローカルストレージからデータを取得
const items = JSON.parse(localStorage.getItem("items")) || [];

</script>

<template>
  <!-- tweetsを表示する 
  <div v-for="item in items" :key="item.number">
    <li>{{ item.number }}.{{ item.name }} {{ item.day }}</li>
    <li >{{ item.message }}</li>
    <hr>    
  </div>-->
  <li>{{ items[0].roomNumber }}</li>
  <li>{{ items[0].tweet.number }}.{{ items[0].tweet.name }}{{ items[0].tweet.day }}</li>
  <li>{{ items[0].tweet.message }}</li>
  <hr>
</template>

<style>
li {
  list-style: none;
}
</style>