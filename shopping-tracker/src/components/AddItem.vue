<template>
  <div class="add-item">
    <input v-model="description" placeholder="Описание" class="input"/>
    <input v-model.number="price" type="number" class="input"/>
    <button @click="addItem" class="button">Добавить покупку</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      price: 0
    };
  },
  methods: {
    addItem() {
      if (this.description && this.price > 0) {
        this.$store.dispatch('addItem', {
          description: this.description,
          price: this.price
        });
        this.description = '';
        this.price = 0;
      }
    }
  }
};
</script>

<style scoped>
.add-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.input {
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.button:hover {
  background-color: #0056b3;
}
</style>
