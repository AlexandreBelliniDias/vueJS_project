<template>
    <div>
        {{serie.drug_name}}
    </div>
</template>

<script>
export default{
    props:{
        serie:{
            type:Object,
            require:true
        }
    }
}
</script>
