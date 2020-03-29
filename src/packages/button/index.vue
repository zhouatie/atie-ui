<template>
  <button class="t-button" :class="`t-button--${type}`"><slot></slot></button>
</template>

<script>
export default {
  name: 't-button',
  data() {
    return {};
  },
  props: {
    text: String,
    type: {
      type: String,
      default: '',
      validator(type) {
        if (
          type &&
          !['warning', 'success', 'danger', 'info', 'primary'].includes(type)
        ) {
          console.error(
            'type类型必须为:' +
              ['warning', 'success', 'danger', 'info', 'primary'].join('、')
          );
        }
        return true;
      }
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss">
@import '../../styles/var.scss';

$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.t-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &--#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &--#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &--#{$type}:active,
    &--#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
}
</style>
