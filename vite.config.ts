import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin']
    }
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      '@emotion/react',
      '@emotion/styled',
      '@mui/material/styles',
      '@mui/material',
      '@jsonforms/core',
      '@jsonforms/react',
      '@jsonforms/material-renderers'
    ]
  },
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
})