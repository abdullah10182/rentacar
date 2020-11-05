import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import createPersistedState from 'vuex-persistedstate'
//import Cookies from 'js-cookie';


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    vehicles: [],
    locations: [],
    filteredVehicles: [],
    currentVehicle:  {},
    user: {},
    token: ''
  },
  getters: {
    allVehicles: state => state.vehicles,
    allLocations: state => state.locations,
    filteredVehicles: state => state.filteredVehicles,
    currentVehicle: state => state.currentVehicle,
    user: state => state.user,
    token: state => state.token,
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
    },
    SET_VEHICLE: (state, vehicle) => {
      state.currentVehicle = vehicle
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
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
    },

    getVehicle ({ commit, state }, slug) {
      const vehicle = state.vehicles.find( vehicle => vehicle.slug === slug);
      console.log(state.vehicles);
      commit('SET_VEHICLE', vehicle);
    },

    registerUser({ commit, state}, user) {
        axios.post('http://rentacar-api/api/auth/register', user).then(res =>{
          console.log(response);
        })
    },

    loginUser({ commit, state}, user) {
        axios.post('http://rentacar-api/api/auth/login', user).then(res =>{
          commit('SET_USER',res.data.user);
          commit('SET_TOKEN',res.data.token);
          router.push({ name: 'Confirmation' })
        })
    },

    activateUser({ commit, state}) {
        const code = new URLSearchParams();
        code.append('activation_code', '9!RxDkO2aU2Ekk7NXqEvARus1IYvGT2Zfn7f3coqqYDo')
        axios.post('http://rentacar-api/api/auth/account-activation', code).then(res =>{
          console.log(response);
        })
    },

    makeReservation({ commit, state }, reservationData) {
      const authorization = {
          headers: {
              Authorization: `Bearer ${this.state.token}`,
              'Content-Type': 'multipart/form-data'
          }
      }

      axios
          .post(
              'http://rentacar-api/create-reservation',
              reservationData,
              authorization
          )
          .then(response => {
              console.log(response)
          })
          .catch(error => {
              console.log(error)
          })
    }
  
  }
})
