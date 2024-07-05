<template>
  <div class="item-list">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.description }} - {{ item.price }} руб.
      </li>
    </ul>
    <div class="total">Сумма: {{ totalAmount }} руб.</div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    },
    totalAmount() {
      return this.$store.getters.totalAmount;
    }
  }
};
</script>

<style scoped>
.item-list {
  text-align: left;
}
.item-list ul {
  list-style-type: none;
  padding: 0;
}
.item-list li {
  padding: 5px 0;
}
.total {
  font-weight: bold;
  margin-top: 10px;
}
</style>
