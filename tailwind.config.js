module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/css/**/*.css',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://cdn.pixabay.com/photo/2015/03/26/10/58/apple-692186_960_720.jpg')",
       })
    
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
