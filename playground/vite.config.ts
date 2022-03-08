import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unplugin from '../src/index'

export default defineConfig({
  plugins: [
    //Inspect(),
    vue(),
    Unplugin.vite(),
  ],
})
