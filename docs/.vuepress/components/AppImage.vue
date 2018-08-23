<template>
    <img :src="require(thisImage)" />
</template>

<script>
    export default {
        data: function()  {
            return {
                thisImage: require(this.image)
                }
        },
        props: {image: String}
    }
</script>