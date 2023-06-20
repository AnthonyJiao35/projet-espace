<template>
        <v-btn color="primary" outlined :href="link">
            <slot></slot>
        </v-btn>

</template>
  
<script>

export default {
    name: 'boutonPlanete',

    props: {
        link: String
    }
}
</script>
  
<style scoped></style>
  