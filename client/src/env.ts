declare global {
    interface Window {
        env: any
    }
}

type EnvType = {
    REACT_APP_SERVER_HOSTNAME: string,
    REACT_APP_SERVER_PORT: string,
    REACT_APP_HTTPS: string
}

export const env: EnvType = { ...process.env, ...window.env }
