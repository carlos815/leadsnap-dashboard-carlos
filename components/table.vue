<template>
  <div class="p-8 bg-white overflow-auto w-full">
    <table class="table-auto border border-gray-5 whitespace-nowrap w-full">
      <thead class="">
        <tr class="text-left text-sm border border-gray-5 border-b-2 bg-gray">
          <th class="p-4 px-[20px] border border-gray-5">Site</th>
          <th class="p-4 px-[20px] border border-gray-5">Name</th>
          <th class="p-4 px-[20px] border border-gray-5">In-app</th>
          <th class="p-4 px-[20px] border border-gray-5">Email</th>
          <th class="p-4 px-[20px] border border-gray-5">Action</th>
        </tr>
      </thead>
      <tbody>
        <Row
          v-for="(item, index) in data.gbplocations"
          :key="index"
          :rowdata="item"
          v-bind:class="index % 2 == 0 ? 'bg-white' : 'bg-gray'"
        ></Row>
      </tbody>
    </table>
  </div>
</template>


<script setup>
const { data: data } = await useFetch("/api/data");
console.log(data);
</script>



