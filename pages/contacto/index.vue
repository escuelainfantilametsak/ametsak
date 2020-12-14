<template>
<section>
  <div class="container">
    <div>    
        <Logo1/>
  </div>
 </div>
 <div class="container">
      <div class="navy-line"></div>
     <h1 class="h1">        
          {{ $t('titleContacto') }}       
        </h1>
        <!-- <h1 class="title">
          {{ $t('titleContacto') }}
        </h1> -->
         <h2 class="subtitle">
         {{ $t('subContacto') }}
      </h2>
     <div class="row justify-content-center">
          <div class="col-md-12">   
            		<div class="our-services-wrapper mb-60">
							<div class="services-inner">
								<div class="our-services-img">
                  <span class="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x linkmapacontacto"></i>                   
                   <i class="fas fa-hospital-alt fa-stack-1x fa-inverse"></i>
                   <i class="fas fa-hospital-alt"></i>
                  
                  </span>
							
								</div>
								<div class="our-services-text-grande">
									<h4>Cruces</h4>                 
								  <nuxt-link class="linkSolitudMatricula" :to="localePath({ name:'contacto-cruces'})">{{ $t('subInstalacion') }}
                  <span class="fa-stack fa-2x">
                                  <i class="fas fa-circle fa-stack-2x linkmapacontacto"></i>                   
                                  <i class="fas fa-info-circle fa-stack-2x fa-inverse"></i>                           
                  </span>
                  </nuxt-link>
								</div>

                  <!-- Mapa -->
                  <div class="mapaminiatura">
                      <mapagoogle/>
                  </div>

							</div>
						</div>

	          <!-- <div class="our-services-wrapper mb-60">
							<div class="services-inner-verde"> -->
							

                <!-- icono izquierda -->
               <!-- <div class="our-services-img">
                  <span class="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x linkmapacontacto-verde"></i>                   
                    <i class="far fa-building fa-stack-1x fa-inverse"></i>
                  </span>
								</div>-->
								
                <!-- detalle texto -->
							<!--	<div class="our-services-text-grande">
									<h4>Barakaldo Centro</h4>
                   <h5 class="subtitle_small">
                        Apertura Marzo 2020
                  </h5>
                   <nuxt-link class="linkSolitudMatricula" :to="localePath({ name:'contacto-barakaldo'})">{{ $t('subInstalacion') }}
                  <span class="fa-stack fa-2x">
                                  <i class="fas fa-circle fa-stack-2x linkmapacontacto"></i>                   
                                  <i class="fas fa-info-circle fa-stack-2x fa-inverse"></i>                           
                  </span>
                  </nuxt-link>
                
								
								</div>-->
                <!-- Mapa -->
                <!-- 	<div class="mapaminiatura">
                      <mapagoogle2/>
                    	</div>
							</div>             
						  </div>--> 
         </div> 
     </div>
      
</div>

</section>

</template>

<script>
import Logo1 from '~/components/LogoSeccion1.vue'
import mapagoogle from '~/components/map.vue'
import mapagoogle2 from '~/components/map2.vue'

export default {
  components: {
    Logo1,
    mapagoogle,
    mapagoogle2
  }
}


</script>

<style>

</style>

