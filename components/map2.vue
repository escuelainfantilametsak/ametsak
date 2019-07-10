<template>
    <GmapMap
    v-bind:center="{lat:43.296038, lng:-2.987977}"
    v-bind:zoom="15"
    
    style=" height: 300px"
    
    >
    <GmapMarker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
        v-bind:draggable="false"
        @click="center=m.position"
    />
    </GmapMap>
</template>
<script>
export default {
 data () {
    return {      
      markers: [{
            position: {
              lat: 43.296038,
              lng: -2.987977
            }
          }]
    }
  }
}
</script>

