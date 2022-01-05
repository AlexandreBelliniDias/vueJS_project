<template>
    <div>
        {{serie.active_ingredient}}
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