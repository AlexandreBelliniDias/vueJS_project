<template>
    <div>
        {{serie.name}}
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