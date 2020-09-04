<template>
    <span class="badge">
        <template v-if="available">Available</template>
        <template v-else>Not Available</template>
    </span>
</template>

<script>
export default {
    props: {
        available: {
            type: Number,
            default: 1
        }
    }
}
</script>

