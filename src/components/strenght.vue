<template>
    <div>
        {{serie.strength}}
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