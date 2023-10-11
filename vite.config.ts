import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      output: {
        assetFileNames: ({ name }) => {
          // Move files which end with gif, jpeg, jpg, png or svg to assets/images.
          // If you don't need hash, you can use the [name] placeholder like this:
          // 'assets/images/[name][extname]'
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
      
          // Move files which end with css to assets/css
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
      
          // Default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      }
    }
  },
  //we added this for deployment
  base: '/pivskiCjenik/',
  
})
