function swRegister() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('✅ Service Worker terdaftar dengan sukses:', registration.scope);
        })
        .catch((error) => {
          console.error('❌ Pendaftaran Service Worker gagal:', error);
        });
    });
  }
}

export default swRegister;
