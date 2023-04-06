<template>
  <div class="text-blue-1 flex min-h-screen min-w-screen bg-gray">
    <div>
      <Sidebar></Sidebar>
    </div>
    <div class="min-w-0 w-full">
      <Global-header></Global-header>
      <div class="px-8">
        <Page-header> </Page-header>
        <Summary-blocks></Summary-blocks>
        <Table></Table>
      </div>
    </div>
  </div>
</template>

<script setup>
// const { data: data } = await useFetch("/api/data");
</script>
