const env = process?.env || {};

console.log("env : ", env['NEXT_PUBLIC_BACKEND']);

const BACKEND_URL = env['NEXT_PUBLIC_BACKEND'] || "https://shifttime.onrender.com";

console.log(BACKEND_URL);

export { BACKEND_URL };