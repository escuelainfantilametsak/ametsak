import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  
  head: {
    title: 'Escuela Infantil Ametsak',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Escuela infantil - Haurreskola de Barakaldo' },
      { hid: 'keywords', name: 'keywords', content: 'haurreskola, guarderia barakaldo, guarderia cruces, guarderia, escuela infantil' }
    ],  
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' , defer: true},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', defer: true },   
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' , defer: true}
     
    ],
  
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Pacifico|Neucha|Fredoka+One' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },    
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.1/css/all.css' }
      
      
     
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
   /*
  ** Global CSS
  */
 css: [
  '~/css/main.css'

	],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/vue2googlemaps.js', ssr:false},
    '~/plugins/fireauth.js'
  ],

  /*
  ** Nuxt.js modules
  */
 modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
   
    ['nuxt-i18n', {
      locales: ['eu', 'es'],
      defaultLocale: 'es',
      locales: [
        {
          code: 'eu',
          file: 'eu.js',
          icon: '/pais-vasco.png',
          name: 'Euskera'
        },
        {
          code: 'es',
          file: 'es.js',
          icon: '/espana.png',
          name: 'Español'
        }       
      ],
      lazy: true,
      langDir: 'lang/'
      
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-122941376-1'
    }]
  ],
  
  router: {
    // middleware: 'router-auth'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
