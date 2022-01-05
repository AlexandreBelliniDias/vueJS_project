<template>
    <div>
        {{serie.product_number}}
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
