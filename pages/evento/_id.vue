<template>
  <div class="container">
     <div class="navy-line"></div>
      <h1 class="h1">        
         {{ $t('blogText') }}          
        </h1>
      <h2 class="subtitle">
        {{ post.title }}
      </h2>
    <div class="containerPost">
      <h2 class="title is-2"></h2>
      <div v-html="post.content"></div>
      <nuxt-link class="btn btn-primary" :to="localePath('evento')"> {{ $t('volverText') }}</nuxt-link>
      <br>      
    </div>
  </div>
</template>

<script>
  // import posts saved JSON data
  import posts from '~/posts.json'

  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }, callback) {
      let post = posts.find(post => post.id === parseInt(params.id))
      if (post) {
        callback(null, { post })
      } else {
        callback({ statusCode: 404, message: 'Post not found' })
      }
    },
    head () {
      return {
        title: this.post.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.summary
          }
        ]
      }
    }
  }
</script>