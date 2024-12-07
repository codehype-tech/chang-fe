<template>
  <div class="tab-page-item-container">
    <div class="title-container">
      <div class="header-container">
        <label class="l-title">
          <slot name="title"> </slot>
        </label>
        <slot name="sub-title"></slot>
      </div>

      <slot name="actions"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.l-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 37.5px;
  letter-spacing: 1.25px;
  text-align: left;
  text-decoration-skip-ink: none;
  color: black;
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
