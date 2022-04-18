/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // 更多环境变量...
}

interface ImportMeta { // eslint-disable-line no-unused-vars
  readonly env: ImportMetaEnv
}
