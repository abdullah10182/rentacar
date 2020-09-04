<template>
  <div class="vehicle-list flex justify-between mt-4 flex-wrap">
    <vehicle 
      v-for="(vehicle, index) in filteredVehicles" :key="index"
      :name="vehicle.title"
      :description="vehicle.description"
      :image="vehicle.image.path"
      :price="vehicle.price"
      :available="vehicle.available"
      />

  </div>
</template>

<script>
import Vehicle from '@/components/Vehicle'

export default {
  props: {
    filtered: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Vehicle
  },
  computed: {
    vehicles () {
      return this.$store.getters.allVehicles
    },
    filteredVehicles () {
      return this.$store.getters.filteredVehicles
    }

  }
}
</script>
