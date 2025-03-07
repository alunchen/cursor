declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue/jsx-runtime' {
  export default any
}

declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any
  }
} 