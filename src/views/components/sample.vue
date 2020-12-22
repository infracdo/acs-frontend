<template>
  <div id="aapp">
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('https://192.168.90.11:8084/devices/Info/all').then((response) => {
      this.info = response.data;
      console.log('hellaaao world');
    }).catch((error) => { console.log(error); });
  },
};
</script>
