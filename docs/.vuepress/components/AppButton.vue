<template>
    <button :class="classObject"><slot></slot></button>
</template>

<script>
export default {
  props: {
    small: Boolean,
  },
  computed: {
    classObject: function() {
      return {
        appButton: true,
        small: this.small,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../override.styl';

.appButton {
    width: 100%;
    padding: 1rem;
    border: solid 3px $accentColor;
    color: #ac65fe;
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 3px;

    &.small {
        padding: 0.5rem;
        margin: 0.5rem;
        max-width: 120px;
    }

    &:hover {
        background-color: #593a71;
        color: cyan;
    }
}
</style>
