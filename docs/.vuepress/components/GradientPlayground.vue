<template>
<div class="gradient">My gradient</div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../override.styl';

.gradient {
    background: linear-gradient(90deg, $accentColor, lime);
    border-radius: 5px;
    width: 100%;
    animation: gradientShift linear 3s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes gradientShift {
    from {
        filter: hue-rotate(0deg);
    }

    to {
        filter: hue-rotate(360deg);
    }
}
</style>
