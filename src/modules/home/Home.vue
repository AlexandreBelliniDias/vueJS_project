<template>
<div>
  <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Bluestorm</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/create">
          <i class="fa fa-prescription-bottle"></i>
          New Med
        </a>
      </li>
       <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-microscope">
            <span class="badge badge-danger">5</span>
          </i>
          Physical Exam
        </a>
      </li>
       <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-medkit">
              <span class="badge badge-danger">11</span>
          </i>
          Service
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <i class=" fa fa-solid fa-book-medical">
              <span class="badge badge-danger">2</span>
          </i>
          Information
        </a>
      </li>
     
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="/#/login">
          <i class="fas fa-lg fa-id-card"></i>
          Login
        </a>
      </li>
     
    </ul>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="form.search" :minlength="3">
      <button  class="btn btn-outline-success my-2 my-sm-0" @click.prevent="search()">Search</button>
    </form>
    </div>
  </nav>
  
  <div class="container-fluid">
    <table class="table">
    <thead>
      <tr>
        <th scope="col" class="col-1">Product Number</th>
        <th scope="col" class="col-2">Drug Name</th>
        <th scope="col" class="col-2">Active Ingredient</th>
        <th scope="col" class="col-2">Form</th>
        <th scope="col" class="col-2">Strength</th>
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
    <i>Page {{this.form.page}} of {{medications.last_page}}</i>
    <input required type="range" :max='medications.last_page' :min='1' v-model="form.page" class="form-control" placeholder="page">

    <i>Limit per page: {{this.form.limit}} of total {{medications.total}} </i>
    <input required type="range" v-model="form.limit" :min='1' class="form-control" placeholder="limit">

    
  </div>
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
  background-color: rgb(43, 43, 43);
  color: rgb(255, 255, 255);
}
.container-fluid{
  background-color: rgb(43, 43, 43);
  color: rgb(255, 255, 255);
}
.table{
  background-color: rgb(43, 43, 43);
  color: rgb(255, 255, 255);
  font-size: small;
}
li{
  cursor: pointer;
}
.table th{
  border-top: none;
  text-align: center;
}
thead{
  font-size: medium;
}
input:invalid {
  border: 2px  red;
}
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  font-size: 0.75rem;
  position: absolute;
  right: 0;
  font-family: sans-serif;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 3px;
  line-height: 12px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  top: -10px;
}
</style>
 