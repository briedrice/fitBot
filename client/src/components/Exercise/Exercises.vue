<template>
  <v-container>
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
              <v-progress-circular indeterminate :size="100" :width="10" color="accent"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>
    <v-toolbar color="white" >
      <v-toolbar-title><h1>Exercises</h1></v-toolbar-title>
      <v-spacer></v-spacer>
       <v-text-field flex prepend-icon="search" class="hidden-xs-only" placeholder="Search" color="accent" single-line hide-details ></v-text-field>
       <v-btn icon class="hidden-sm-and-up">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
      <v-card  v-if="!loading">
      <v-container fluid grid-list-lg>
        <v-layout row wrap fill-height>
          <v-flex v-for="exercise in exercises" :key="exercise.title" xs12 sm6 lg3>
            <v-card  color="primary" class="white--text fill-height">
              <v-img :src="exercise.imageUrl" class="fill-height" aspect-ratio="1.5" gradient="to top right, rgba(51,47,89,.7),  rgba(208,59,27,.2)">
                <v-layout pa-2 column fill-height class=" white--text">
                  <v-flex fill-height class="flex-container">
                    <v-card-title primary-title>
                        <div class="headline">{{exercise.title}}</div>
                        <span class="description-overview">{{exercise.description}}</span>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn color="accent lighten-2" class="black--text" large @click.stop="handleModal(exercise)"> View More
                      </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout> 
              </v-img>
            </v-card>
          </v-flex>
          <ExercisePopup v-if="activeExercise !== null" v-model="showModal" :exercise="activeExercise"/>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>
  import ExercisePopup from './ExercisePopup'
  import {mapGetters} from "vuex";

  export default {
    name: 'Exercises',
    data () {
      return {
        showModal: false,
        activeExercise: null
      }
    },
    created(){
      this.handleGetExercises();
    },

    computed:{
      ...mapGetters(["exercises", "loading"])
    },

    methods:{
      handleGetExercises(){
        //reach to vuex store and fire action that gets exercises
        this.$store.dispatch("getExercises");
      },
      handleModal(exercise){ 
        this.showModal = true;
        this.activeExercise = exercise;
      }
    },
    components: {
      ExercisePopup
    }
  };
</script>


<style>
  .description-overview:before{
    content:'';
    width:100%;
    height:100%;    
    position:absolute;
    left:0;
    top:0;
    background:linear-gradient(transparent, #1C3144 90%);
  }
  .flex-container{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
</style>
