<template>
  <list />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import List from '../components/list.vue';

export default defineComponent({
  name: 'ListView',

  components: {
    List,
  },
});
</script>