<template>
    <div class="ReservationForm p-5 bg-white w-1/2">
        <input-select :label="'Pick up location'" :options="locations" @onSelect="filterVehiclesOnApi"/>
    </div>
</template>

<script>
import InputSelect from '@/components/forms/InputSelect'

export default {
  components: {
    InputSelect,
  },
  computed: {
    locations () {
      return this.$store.getters.allLocations
    }
  },
  methods: {
    filterVehicles (value) {
      this.$store.dispatch('filterVehicles', +value)
    },
    filterVehiclesOnApi (value) {
      this.$store.dispatch('filterVehiclesOnApi', +value)
    }
  }
}
</script>
