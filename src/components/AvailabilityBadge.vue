<template>
    <span class="badge bg-grey-lighter rounded-full p-2 m-2 inline-block text-grey">
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

