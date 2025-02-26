<script setup lang="ts">

</script>

<template>
  <layout-provider>
    <div class="app-layout app-layout--default">
      <layout-base-header />

      <div class="app-layout__content">
        <slot />
      </div>

      <layout-base-footer />
    </div>
  </layout-provider>
</template>
