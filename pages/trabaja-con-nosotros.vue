<template>
<section>
 
 <div class="container">
      <div class="navy-line">          
      </div>
     <h1 class="h1">        
          {{ $t('titleTrabaja') }}       
        </h1>
       
        <h2 class="subtitle">
         {{ $t('subTrabaja') }}
      </h2>
     <div class="row justify-content-center">
        <div class="col-md-2">    
            <img src="~/assets/resume.png" class="img-fluid animated fadeIn" alt="logo">         
        </div>
      

        <div class="col-md-8">


                <div class="card card-pricing popular shadow text-center px-3 mb-4">
                    <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-ametsakVerde text-black shadow-sm">2 Puestos Disponibles</span> 
                     
                    <p class="text-justify">Tenemos 2 puestos vacantes para trabajar en la Escuela Infantil Ametsak. Envianos un correo a nuestro email o llamanos para explicarte las condiciones y concertar una entrevista.</p> 

                     <ul style="list-style-type: none">
                        <li><a href="tel:946086394"><i class="fas fa-phone"></i> 94 608 63 94</a></li>
                    </ul>

                  </div>



            <p class="text-justify">{{ $t('trabajaMatTex1') }} <a href="mailto:hola@escuelainfantilametsak.com?subject=CV: ">CV Ametsak</a> </p>            
            <p class="text-justify">{{ $t('trabajaMatTex2') }}</p>
            <p class="text-justify">{{ $t('trabajaMatTex3') }}</p>
            <ul class="fa-ul text-justify">                
                    <li><span class="fa-li"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> {{ $t('trabajaMatTex4') }}</li>
                    <li><span class="fa-li"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> {{ $t('trabajaMatTex5') }}</li> 
            </ul>
        </div>
    </div>
</div>

</section>

</template>


