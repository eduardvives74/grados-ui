<template>
  <div class="switch-container">
    <label class="switch-label" for="">
      {{ label }}
    </label>
    <label class="switch">
      <input v-bind="$attrs" type="checkbox" :checked="checked" @change="checkedToggler($event)">
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script lang="ts" setup>
// ? NOTA: Se usa v-bind="$attrs" para poder heredar todos los atributos agregados a <Toggle />
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:checked']);
function checkedToggler($event : any) {
  emits('update:checked', $event.target.checked)
}
</script>

<style lang="scss" scoped>
.switch-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  .switch-label {
    display: block;

  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input { 
    opacity: 0;
    width: 0;
    height: 0;
    &:checked {
      + .slider {
        background-color: #7e22ce;
        &::before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }
      }
    }
    &:focus {
      + .slider {
        box-shadow: 0 0 1px #7e22ce;
      }
    }
  }
}


.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: rgba($color: #7e22ce, $alpha: 0.5);
  -webkit-transition: .4s;
  transition: .4s;
  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
}
</style>