import services from '@/http'


export const setMedications = () => { 
  return services.medications.medicationsList().then(res =>{
    console.log(res.data)
  })
}



// username: bluestorm-api
// password: apipassword123