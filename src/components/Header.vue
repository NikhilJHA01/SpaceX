<template>
  <div class="header">
    <h1 class="header__title">SpaceX Launch Programs</h1>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-start;
  padding: 0 5px;
  &__title {
    font-size: 20px;
  }

  @include LargerThanPhone() {
    align-items: center;
    padding: 0 10px;
    color: rgb(14, 13, 13);
  }
}
</style>
