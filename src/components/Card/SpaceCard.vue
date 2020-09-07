<template>
  <el-card :body-style="{ padding: '10px' }">
    <el-image
      class="image"
      :src="flight.flightImageSmall"
      fit="cover"
      :alt="flight.missionName"
      lazy
    >
      <div slot="placeholder" class="image-slot">
        Loading<span class="dot">...</span>
      </div>
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i></div
    ></el-image>
    <div class="card-text">
      <label class="card-text__flightName">
        {{ flight.missionName }} #{{ flight.flightNumber }}
      </label>
      <section class="flex-row">
        <label class="label">Mission Id's:</label>
        <label class="value">
          {{
            flight.missionId.length > 0 ? flight.missionId.toString() : "None"
          }}
        </label>
      </section>
      <section class="flex-row">
        <label class="label">Launch Year:</label>
        <label class="value">{{ flight.launchYear }}</label>
      </section>
      <section class="flex-row">
        <label class="label">Successfull Launch:</label>
        <label class="value">{{
          flight.launchSuccess ? "True" : "False"
        }}</label>
      </section>
      <section class="flex-row">
        <label class="label">Successfull Landing:</label>
        <label class="value">{{
          flight.landingSuccess ? "True" : "False"
        }}</label>
      </section>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "SpaceCard",
  props: ["flight"]
};
</script>

<style lang="scss" scoped>
.el-card {
  min-width: 190px;
  max-width: 210px;
  border-radius: 5px;

  .image {
    min-height: 200px;
    min-width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $secondary-black;
  }
  .image-slot {
    height: 100%;
    width: 100%;
  }
  .card-text {
    font-size: 12px;
    margin: 10px 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @include LargerThanPhone() {
      font-size: 14px;
    }
    &__flightName {
      color: $primary-blue;
      font-weight: 700;
    }

    .flex-row {
      display: flex;
      margin-top: 10px;
      text-align: left;
    }
    .label {
      margin-right: 5px;
      font-weight: 600;
      @include LargerThanPhone() {
        margin-right: 5px;
        font-weight: 600;
      }
    }
    .value {
      color: $primary-blue;
      font-weight: 600;
    }
  }
}
</style>
