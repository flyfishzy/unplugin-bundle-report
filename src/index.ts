import { createUnplugin } from 'unplugin'

export const unplugin = createUnplugin(() => {
  const deps: Set<string> = new Set()
  return {
    name: 'unplugin-bundle-report',

    transform(code, id) {
      if (id.includes('node_modules')) {
        id = id.replaceAll('\\', '/')
        console.warn(id)
        const start = id.lastIndexOf('node_modules') + 13
        let end = id.indexOf('/', start)
        if (id.charAt(start) === '@')
          end = id.indexOf('/', end + 1)

        deps.add(id.substring(start, end))
      }
      return undefined
    },

    buildEnd() {
      console.warn()
      console.warn('------ bundled dependencies: ------ ')
      console.warn(deps)
      console.warn('----------------------------------- ')
    },
  }
})

export const webpackPlugin = unplugin.webpack
export default unplugin
