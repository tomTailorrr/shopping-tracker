<template>
  <div id="app">
    <h1>Отслеживание покупок</h1>
    <AddItem />
    <ItemList />
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue';
import ItemList from './components/ItemList.vue';

export default {
  name: 'App',
  components: {
    AddItem,
    ItemList
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #007bff;
  margin-bottom: 20px;
}
</style>
