<template>
    <div class="container pt-8">
        <div class="rounded overflow-hidden shadow-lg p-8">
            <div class="mb-8">
                <img class="w-full" :src="vehicle.image.path" v-if="vehicle.image">
            </div>
            <div class="flex">
                <div class="CarDetails w-1/2 p-8">
                    <div class="font-bold text-xl mb-2">{{ vehicle.title }}</div>
                    <p class="text-grey-darker text-base mb-4" v-html="vehicle.description" />


                    <h3 class="mb-4">Available in:</h3>

                </div>

                <div class="CarPrices w-1/2 p-8 border-l">

                    <ul class="mb-4">
                        <li><strong>By Day:</strong> ${{vehicle.price}} </li>

                    </ul>

                    <router-link
                        class="bg-green text-white font-bold py-3 px-4 rounded ml-4 inline-block"
                        :to="{ name: 'Reservation' }">Continue</router-link>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            vehicle() {
                return this.$store.getters.currentVehicle
            },
        },
        beforeMount() {
          setTimeout(() => {
            this.$store.dispatch('getVehicle', this.$route.params.slug)
          }, 400);
        }
    }
</script>