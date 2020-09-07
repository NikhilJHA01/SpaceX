<template>
  <div class="footer">
    <h1 class="title">Developed By Nikhil Jha</h1>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  height: 30px;
  background-color: $secondary-black;
  bottom: 0;
  position: fixed;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  h1 {
    font-size: 14px;
    color: black;
  }
}
</style>
