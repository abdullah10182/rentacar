<template>
    <div class="container pt-8" >
        <div class="rounded overflow-hidden shadow-lg p-8">
            <h2 class="mb-0">Is this information correct</h2>
            <ul class="my-8">
                <li>Name: <strong>{{ user.name }}</strong></li>
                <li>Surname: <strong>{{ user.surname }}</strong></li>
                <li>Vehicle: <strong>{{ vehicle.title }}</strong></li>
            </ul>

            <button class="bg-green text-white font-bold py-3 px-4 rounded inline-block" @click="makeReservation">
                Make reservation
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.getters.user
            },
            vehicle() {
                return this.$store.getters.currentVehicle
            },
        },
        methods: {
            makeReservation() {
                const reservationData = new URLSearchParams()
                reservationData.append('user_id', this.user.id)
                reservationData.append('vehicle_id', this.vehicle.id)
                this.$store.dispatch('makeReservation', reservationData)
            }
        }
    }
</script>