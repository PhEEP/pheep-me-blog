<template>
    <div :class="{imageFrame, vaporWave}">
        <div :class="{imageInnerFrame}">
            <img :src="image" />
            <button @click.prevent="toggleVaporWave()">Vaporwave me</button>
            <div v-if="caption">
                {{ caption }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bordered: true,
      vaporWaving: false,
    };
  },
  methods: {
    toggleVaporWave: function() {
      this.vaporWaving = !this.vaporWaving;
    },
  },
  computed: {
    imageFrame: function() {
      return this.bordered && 'imageFrame';
    },
    imageInnerFrame: function() {
      return this.bordered && 'imageInnerFrame';
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
