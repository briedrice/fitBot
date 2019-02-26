import Vue from 'vue'
import Vuex from 'vuex'
import {defaultClient as apolloClient} from './main';
import {GET_EXERCISES, SIGNIN_USER} from './queries';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exercises: [],
    loading: false
  },

  mutations: {
    setExercises: (state, payload) => {
      state.exercises = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    } 
  },

  actions: {
    getExercises:({commit}) =>{
      commit('setLoading', true);
      // use ApolloClient to fire getExercise query
      apolloClient.query({
          query: GET_EXERCISES
      }).then(({data}) => {
        //commit passes data from actions along to mutation functions
        commit('setExercises', data.getExercises);
        commit('setLoading', false);
      })
      .catch(err =>{
        commit('setLoading', false);
        console.error(err);
      })
    },

    signinUser:({commit}, payload) => {
      apolloClient
      .mutate({
        mutation: SIGNIN_USER, 
        variables: payload
      })
      .then(({data}) => {
        localStorage.setItem('token', data.signinUser.token)
        console.log(data.signinUser)
      })
      .catch(err =>{
        console.error(err);
      })
    }
  },

  getters: {
    exercises: state => state.exercises,
    loading: state => state.loading
  }
})
