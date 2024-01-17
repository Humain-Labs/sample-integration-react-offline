import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

import {
  getInitialStyles,
  getMetaTagsAndIconLinks,
  getComponentChunkLinks,
  getFontFaceStylesheet,
  getFontLinks,
  getIconLinks,
} from '@porsche-offline-design-system/components-js/partials';

const transformIndexHtmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const cspContent = [
        `default-src 'self' http://localhost:3010`,
        `style-src 'self' http://localhost:3010 'unsafe-inline'`,
        `script-src 'self' http://localhost:3010`,
        `img-src 'self' http://localhost:3010 data:` // data: is needed for inline background images, e.g. used in checkbox-wrapper and radio-button-wrapper
      ].join('; ');

      const headPartials = [
        `<meta http-equiv="Content-Security-Policy" content="${cspContent}"/>`,
        getInitialStyles(),
        getComponentChunkLinks({ components: ['heading', 'button', 'button-pure', 'select-wrapper', 'text-field-wrapper'] }),
        getFontFaceStylesheet(),
        getFontLinks(),
        getIconLinks({ icons: ['arrow-right', 'arrow-head-down'] }),
        getMetaTagsAndIconLinks({ appTitle: 'Patterns (Porsche Design System)' }),
      ].join('');

      return html.replace(/<\/head>/, `${headPartials}$&`);
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3010,
  },
  preview: {
    port: 3010,
  },
  plugins: [transformIndexHtmlPlugin(), react()],
})
