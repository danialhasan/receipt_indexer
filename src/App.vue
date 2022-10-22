<script lang="ts">
import UploadReceipt from "./components/UploadReceipt.vue";
import ImportTransactions from "./components/ImportTransactions.vue";
export default {
  data() {
    return {};
  },
  components: { UploadReceipt, ImportTransactions },
  methods: {
    previewFile(file: string) {
      const imagePreview = document.getElementById("imagePreview");
      //@ts-ignore
      if (imagePreview) imagePreview.src = file;
    },
  },
};
</script>

<template>
  <div class="h-auto min-h-screen bg-cerulean-blue text-gray-200">
    <header class="mb-10 p-5 font-ArimaMadurai text-2xl font-bold">
      <h1>Receipt Indexer</h1>
    </header>
    <div class="flex h-auto w-full flex-wrap items-center justify-center">
      <upload-receipt title="Upload Receipt" @fileReady="previewFile" />
      <import-transactions />
    </div>
    <img src="" id="imagePreview" class="max-h-64 w-full px-20" />
  </div>
</template>
