<template>
  <div class="tab-page-item-container">
    <div class="title-container">
      <label class="l-title">
        <slot name="title"> </slot>
      </label>

      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.l-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 37.5px;
  letter-spacing: 1.25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.tab-page-item-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
