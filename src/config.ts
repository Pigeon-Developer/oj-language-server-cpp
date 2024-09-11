export const CLANGD_PATH = process.env.CLANGD_PATH || 'clangd';
export const SERVER_HOST = process.env.SERVER_HOST || '';
export const SERVER_PORT = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 30000;
export const SERVER_PATH = process.env.SERVER_PATH || '/clangd';
