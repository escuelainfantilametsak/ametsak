<!-- ./components/Posts.vue -->
<template>
<section class="container">

    <div class="navy-line"></div>
      <h1 class="h1">        
         {{ $t('Filosofia') }}          
        </h1>
      <h2 class="subtitle">
        {{ $t('welcome') }}
      </h2>
    <div class="box">
        <div class="container">
            <div class="row">

            <div class="col-6"  v-for="post in posts.slice().reverse()" :key="post.id">
                    <div class="card mt-3 tab-card">
                        <div class="card-header tab-card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <span>{{ post.published }}</span>
                            </li>                      
                        </ul>
                        </div>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <p class="card-text">{{ post.summary }}</p>
                                <nuxt-link :to="`/evento/${post.id}`"
                                    class="btn btn-primary">
                                    Detalle
                                </nuxt-link>              
                            </div>
                        </div>
                    </div>
                </div>

        </div>



    </div>
    </div>

</section>
</template>

<script>
  import posts from '~/posts.json'

  export default {
    name: 'posts',
    data () {
      return { posts }
    }
  }
</script>

<style>


</style>