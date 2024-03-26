<template>
  <div class="gui-card">
    <div class="gui-card-header">
      <slot name="header"></slot>
    </div>
    <main class="gui-card-content">
      <slot></slot>
    </main>
    <div class="gui-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gui-card {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba($color: #7e22ce, $alpha: 0.35);
  .gui-card-header {
    padding: 1rem 2rem;
    border-bottom: 2px solid rgba($color: #7e22ce, $alpha: 0.1);
  }
  .gui-card-content {
    padding: 1rem 2rem;
  }
  .gui-card-footer {
    padding: 1rem 2rem;
    border-top: 2px solid rgba($color: #7e22ce, $alpha: 0.1);
  }
}
</style>