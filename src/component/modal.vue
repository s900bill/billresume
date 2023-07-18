<template>
  <div
    :id="'carousel' + props.Project"
    data-bs-ride="carousel"
    data-bs-pause="hover"
    class="carousel slide"
    :class="modalshow ? 'fullscreen' : 'col-lg-7 '"
  >
    <div class="carousel-inner" @click="modalshow = true">
      <div
        v-if="modalshow"
        class="position-absolute end-0 top-0 bi-x-lg fs-4 m-3"
        role="button"
        style="z-index: 2"
        @click.stop="modalshow = false"
      ></div>

      <div
        class="carousel-item"
        v-for="img in props.ImageCount"
        :key="img"
        :class="{ active: img == 1 }"
      >
        <img :src="imagepaths[img - 1]" alt="..." />
        <div class="fw-bold bg-white">
          {{ $t(`section3.${props.Project}_ImageTitle_${img}`) }}
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#carousel' + props.Project"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon bg-secondary opacity-25"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="'#carousel' + props.Project"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon bg-secondary opacity-25"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
const { locale, availableLocales } = useI18n({ useScope: 'global' })
const props = defineProps({
  Project: {
    type: String,
    required: true,
    default: '',
  },
  ImageCount: {
    type: Number,
    required: true,
    default: 0,
  },
})

const modalshow = ref(false)

const imagepaths = ref([])
onMounted(() => {
  for (let i = 1; i <= props.ImageCount; i++) {
    imagepaths.value.push(
      new URL(
        `../assets/img/Project/${props.Project}/${i}.png`,
        import.meta.url
      )
    )
  }
})
</script>

<style lang="scss">
.fullscreen {
  z-index: 999 !important;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;

  .carousel-control-prev,
  .carousel-control-next {
    width: 8%;
  }
  .carousel-item {
    margin-right: -100% !important;
  }
}
</style>
