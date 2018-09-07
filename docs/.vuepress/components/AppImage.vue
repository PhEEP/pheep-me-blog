<template>
    <div :class="{imageFrame, vaporWave}">
        <div :class="{imageInnerFrame}">
            <img :src="image" />
            <app-button
            small
            @click.native="toggleVaporWave()">Vaporwave me</app-button>
            <div v-if="caption" class="caption">
                {{ caption }}
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton';
export default {
  data() {
    return {
      bordered: true,
      vaporWaving: false,
    };
  },
  components: {
    AppButton,
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

<style lang="stylus">
@import '../override.styl';

.vaporWave {
  animation: filter-animation 5s infinite;
}

.caption {
  display: flex;
  align-items: center;
  justify-content: center;
}

.imageInnerFrame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes filter-animation {
  0% {
    filter: sepia(0) saturate(2);
  }

  50% {
    filter: sepia(1) saturate(8);
  }

  100% {
    filter: sepia(0) saturate(2);
  }
}
</style>
