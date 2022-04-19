import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta { // eslint-disable-line no-unused-vars
    title: string
  }
}
