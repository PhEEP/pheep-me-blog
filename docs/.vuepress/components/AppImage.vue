<template>
    <div :class="imageFrame">
        <div :class="imageInnerFrame">
            <img :src="image" />
            <button @click="vaporWaving = !vaporWaving">Vaporwave me</button>
            <div v-if="caption">
                {{ caption }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      bordered: true,
      vaporWaving: false,
    };
  },
  methods: {
    toggleVaporWave: function() {
      return (this.vaporWaving = !this.vaporWaving);
    },
  },
  computed: {
    imageFrame: function() {
      return this.bordered && 'image-frame';
    },
    imageInnerFrame: function() {
      return this.bordered && 'image-inner-frame';
    },
    vaporWave: function() {
      return this.vaporWaving && 'vapor-wave';
    },
  },
  props: { image: String, caption: String },
};
</script>

<style>
</style>
