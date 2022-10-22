<script lang="ts">
export default {
  name: "UploadReceipt",
  data() {
    return {
      fileBlobs: {} as any,
      files: {} as any,
    };
  },
  props: {},
  methods: {
    selectFile(): void {
      const fileInput: null | HTMLElement | HTMLInputElement =
        document.getElementById("file-input");
      if (fileInput) {
        fileInput.click();
      }
    },
    getFiles(): File | null {
      const fileInput: null | HTMLElement | HTMLInputElement =
        document.getElementById("file-input");
      const fileReader = new FileReader();

      if (fileInput) {
        console.log(fileInput.files);
        this.fileBlobs = fileInput.files;
      }

      let file = fileReader.readAsDataURL(this.fileBlobs[0]);
      fileReader.onloadend = (e) => {
        if (!e.currentTarget) return;
        console.log("Ready!", e.currentTarget?.result);
        this.$emit("fileReady", e.currentTarget?.result);
      };

      return null;
    },
  },
  computed: {},
  emits: ["fileReady"],
};
</script>
<template>
  <div
    class="mx-auto mb-6 rounded-lg bg-gray-200 px-8 py-5 text-center text-2xl font-bold text-gray-800"
    @click="selectFile"
  >
    Upload Receipt
    <input
      id="file-input"
      @change="getFiles()"
      type="file"
      class="hidden"
      accept="image/*"
    />
  </div>
</template>
