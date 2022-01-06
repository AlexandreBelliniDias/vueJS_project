<template>

  <form id="create">
    <h1>Register New Medication</h1>
    <div class="form-group">
      <label>Drug Name</label>
      <input type="text" class="form-control" id="drugName" v-model="form.drug_name">
    </div>
   <div class="form-group">
      <label>Units per package</label>
      <input type="number" class="form-control" id="unitsPackage" :min='1' v-model="form.units_per_package">
    </div>
    <div class="form-group" id="dateOn">
      <label>Issued on</label>
      <input type="date" class="form-control" v-model="form.issued_on">
    </div>
    <div class="form-group" id="dateOff">
      <label>Expires on</label>
      <input type="date" class="form-control" :min= this.form.issued_on v-model="form.expires_on">
    </div>
    <div class="form-group">
      <label>Manufacturers</label>
        <select id="manufacturers" class="form-control">
          <option :key='item.id' v-for='item in manufacturers'>
            <manufacturesOptions :serie='item' v-model="form.manufacturers"/>
          </option>
        </select>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="send()">Send</button>
    <a class="nav-link" href="/#/">
          <i class="fas fa-arrow-circle-left"></i>
          Return
        </a>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import manufacturesOptions from '../../components/manufacturesOptions.vue'
export default {
  data: () => ({
    form: {
      drug_name: '',
      units_per_package:'',
      issued_on:'',
      expires_on:'',
      manufacturers: []
    }
  }),
  name:'manufacturers',
  components: {
    manufacturesOptions
  },
  computed:{
    ...mapState('create',['manufacturers'])
  },
  methods:{
    ...mapActions('create',['getManufacturers', 'newMed']),
    send: function(){
      this.newMed(this.form)
    }
  },
  mounted(){
    this.getManufacturers()
  }
}
</script>

<style>
#create{
  padding-top: 10%;
  padding-right: 20%;
  padding-left: 20%;
  padding-bottom: 100%;

  background-color: rgb(43, 43, 43);
  color: white;
}
#dateOn{
  float: left;
  width: 50%;
  padding-right: 2%;
  }
#dateOff{
  float: left;
  width: 50%;
}

</style>