<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: "",
  meta: [
    {
      "http-equiv": "Content-Security-Policy",
      content: "upgrade-insecure-requests",
    },
  ],
});
</script>
