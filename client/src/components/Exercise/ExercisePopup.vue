<template>
  <v-dialog v-model="show" width="600">
    <v-card>
      <v-card-title class="display-1 primary white--text" >
        {{exercise.title}}
        <v-spacer></v-spacer>
          <v-icon tag="v-btn" color="white lighten-2" class="black--text" 
          flat
          @click="show=false">close</v-icon>
      </v-card-title>
      <v-layout wrap >
        <v-flex xs12 sm7>
          <v-img
            :src="exercise.imageUrl" 
            aspect-ratio="1"
            :class="{'small-img': $vuetify.breakpoint.xsOnly}"
          ></v-img>
        </v-flex>
        <v-flex xs12 sm5>
          <v-card-text primary-title>
            <div class="font-weight-medium subheading mb-2">
              Description
              <p class="body-1">{{exercise.description}}</p>
            </div>
            <div class="font-weight-medium subheading mb-2">
              Default RPE:
              <span class="body-1">{{exercise.value}}</span>
            </div>
            <div class="font-weight-medium subheading mb-2">
              Muscle Group:
              <v-chip v-for="muscle in exercise.muscleGroup" :key="muscle">{{muscle}}</v-chip>
            </div>
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-flex xs12>
          <v-card-actions>
            <span class="pl-2 grey--text text--darken-2 font-weight-light caption">Cardio:</span>
            <v-spacer></v-spacer>
            <v-rating size="20" :readonly="readonly" :length="length" :value="exercise.cardioLevel"></v-rating>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-actions><span class="pl-2 grey--text text--darken-2 font-weight-light caption"> Strength:</span>
          <v-spacer></v-spacer>
          <v-rating size="20" :readonly="readonly" :length="length" :value="exercise.strengthLevel"></v-rating>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-actions>
              <span class="pl-2 grey--text text--darken-2 font-weight-light caption">Flexibility:</span>
          <v-spacer></v-spacer>
          <v-rating size="20" :readonly="readonly" :length="length" :value="exercise.flexibilityLevel"></v-rating>
          </v-card-actions>
          <v-divider></v-divider>
        </v-flex>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      readonly: true,
      length: 5
    }
  },
  props: {
     value: Boolean,
     exercise: Object
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
.small-img{
  max-height: 200px;
}
</style>

