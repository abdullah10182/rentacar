<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="image" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{name}}</div>
            <p class="text-gray-700 text-base" v-html="description"></p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{price}}</span>
        </div>

        <availability-badge :available="available"/>

        <router-link :to="'/vehicles/' + slug">more details</router-link>

    </div>
</template>

<script>
    import AvailabilityBadge from '@/components/AvailabilityBadge'
    export default {
        components: {
            AvailabilityBadge
        },
        props: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: null
            },
            price: {
                type: Number,
                default: null
            },
            available: {
                type: Number,
                default: 1
            },
            slug: {
                type: String,
                default: ''
            },
        }
    }
</script>
