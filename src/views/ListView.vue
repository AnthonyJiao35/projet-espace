<template>
  <listAstre />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import listAstre from '@/components/list.vue';

export default defineComponent({
  name: 'ListView',

  components: {
    listAstre
},
});
</script>