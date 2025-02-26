<template>
  <div class="ui-quote">
    <div class="ui-quote__content">
      <span class="ui-quote__text">"{{ text }}"</span>
      <br>
      <span class="ui-quote__divider-text">—</span>
      <span class="ui-quote__author">{{ author }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text: string
  author: string
}

defineProps<Props>()
</script>

<style lang="scss">
.ui-quote {
  user-select: none;
  display: flex;
  justify-content: flex-end;

  &__content {
    display: block;
    font-size: 14rem;
    font-style: italic;
    text-align: right;

    @include bp-tablet-min {
      font-size: 16rem;
    }

    @include bp-desktop-xs-min {
      font-size: 20rem;
    }
  }
}
</style>
