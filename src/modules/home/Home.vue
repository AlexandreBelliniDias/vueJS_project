<template>
  <div class="container-fluid">
    <h1>Home</h1>
    <h3>Pag {{this.form.page}} de {{medications.last_page}}</h3>
    <h3>Limite por página {{this.form.limit}} de total {{medications.total}} </h3>
    <input required type="number" v-model="form.page" class="form-control" placeholder="page">
    <input required type="number" v-model="form.limit" class="form-control" placeholder="limit">
    <input required type="text" v-model="form.search" class="form-control" placeholder="search" minlength="3">
    <button type="submit" @click="search()" class="btn btn-primary w-100">Login</button>
    
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Product Number</th>
        <th scope="col">Drug Name</th>
        <th scope="col">Active Ingredient</th>
        <th scope="col">Form</th>
        <th scope="col">Strength</th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <th>
            <div :key='item.id' v-for='item in medications.data'>
              <productNumber :serie='item'/>
            </div>
          </th>
          <th>
            <div :key='item.id' v-for='item in medications.data'>
              <drugName :serie='item'/>
            </div>
          </th>
          <th>
            <div :key='item.id' v-for='item in medications.data'>
              <activeIngredient :serie='item'/>
            </div>
          </th>
          <th>
            <div :key='item.id' v-for='item in medications.data'>
              <formMed :serie='item'/>
            </div>
          </th>
          <th>
            <div :key='item.id' v-for='item in medications.data'>
              <strenght :serie='item'/>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import drugName from '../../components/drugName.vue'
import activeIngredient from '../../components/activeIngredient.vue'
import formMed from '../../components/formMed.vue'
import productNumber from '../../components/productNumber.vue'
import strenght from '../../components/strenght.vue'

export default {
  data: () => ({
    form: {
      page: '1',
      limit:'20',
      search:''
    }
  }),
  name:'medications',
  components: {
    activeIngredient,
    drugName,
    formMed,
    productNumber,
    strenght
  },
  computed:{
    ...mapState('medications',['medications'])
  },
  methods: {
  ...mapActions('medications',['setMedications','setMedicationsSearch']),

  search: function (){
    if (this.form.search === ''){
      this.setMedications({'page':this.form.page, 'limit':this.form.limit})
    } else {
      this.setMedicationsSearch({'page':this.form.page, 'limit':this.form.limit, 'search':this.form.search})
    }
    }
  },

  mounted(){
    this.setMedications({'page':this.form.page, 'limit':this.form.limit})
  }
  
}
</script>

<style>
html{
  background-color: rgb(41, 41, 41);
  color: rgb(255, 255, 255);
}
.container-fluid{
  background-color: rgb(41, 41, 41);
  color: rgb(255, 255, 255);
}
.table{
  background-color: rgb(41, 41, 41);
  color: rgb(255, 255, 255);
}
</style>
 