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
          <div class="col-md-8">        
            <form action="https://formspree.io/hola@escuelainfantilametsak.com"  method="post">
                    
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Nombre " required="">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email " required="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="address" name="address" placeholder="Telefono " required="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Asunto " required="">
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" type="textarea" id="message" name="Mensaje" placeholder="Mensaje " maxlength="200" rows="7"></textarea>
                                </div>
                              
                               

                                <input type="hidden" name="_next" value="https://ametsakweb.firebaseapp.com/contacto/gracias"/>    
                                 <input type="hidden" name="_language" value="es" />
                                 <input type="text" name="_gotcha" style="display:none" />

                                <button class="btn btn-primary pull-right button pageclip-form__submit" type="submit">
                                    <span>Enviar</span>
                                </button>
            </form>
        




      </div>
      <div class="col-md-4">
                <div class="card card-pricing popular shadow text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-ametsakVerde text-black shadow-sm">{{ $t('contactoTxt') }}</span>
            <div class="bg-transparent card-header pt-4 border-0">
                 <h4><span class="navy">Llano 56 Bajo</span> Barakaldo</h4>
                    <p>48903 Cruces</p>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>  <span class="fa fa-phone-square"></span> 94 608 63 94</li>
                    <li> <span class="fa fa-mobile"></span> 94 608 63 94</li>
                    <li><span class="fab fa-facebook-f" style="color: #3385ff"></span> <a href="https://www.facebook.com/escuela.ametsak"> Ametsak Facebook </a> </li>
            </ul>
               
            </div>
        </div>
        <img class="visible-lg" src="~/assets/llamanos.png" width="200">
      </div>

  

     </div>
      
  </div>
   <div class="container">
<div class="alert alert-light center
" role="alert">
  <h3> {{ $t('contactoDistancia2') }}</h3>
</div>
</div>
<mapagoogle/>
</section>

</template>

<script>
import Logo1 from '~/components/LogoSeccion1.vue'
import mapagoogle from '~/components/map2.vue'

export default {
  components: {
    Logo1,
    mapagoogle
  }
}


</script>

<style>

</style>

