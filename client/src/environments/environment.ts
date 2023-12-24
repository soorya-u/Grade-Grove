let BACKEND_URL;

try {
  BACKEND_URL = $ENV.BACKEND_URL;
} catch (e) {
  BACKEND_URL = 'http://localhost:7000';
}

export const environment = {
  BACKEND_URL,
};
