import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicles: [],
    locations: [],
    filteredVehicles: []
  },
  getters: {
    allVehicles: state => state.vehicles,
    allLocations: state => state.locations,
    filteredVehicles: state => state.filteredVehicles
  },
  mutations: {
    GET_VEHICLES: (state, vehicles) => {
      state.vehicles = vehicles
    },
    GET_LOCATIONS: (state, locations) => {
      state.locations = locations
    },
    SET_FILTERED: (state, vehicles) => {
      state.filteredVehicles = vehicles
    }
  },
  actions: {
    getVehicles ({ commit }) {
      axios.get('http://rentacar-api/vehicles').then(response => {
        commit('GET_VEHICLES', response.data)
      })
    },

    getLocations ({ commit }) {
      axios.get('http://rentacar-api/locations/list').then(response => {
        commit('GET_LOCATIONS', response.data)
      })
    },

    filterVehicles ({ commit, state }, value) {
      const filtered = state.vehicles.filter(vehicle => {
        let foundLocations = vehicle.locations.findIndex(location => {
          return location.id === value
        })
        return foundLocations !== -1
      })
      commit('SET_FILTERED', filtered)
    },

    filterVehiclesOnApi ({ commit }, value) {
      axios.get('http://rentacar-api/vehicles/filter/' + value).then(response => {
        commit('SET_FILTERED', response.data)
      })
    }
  }
})
