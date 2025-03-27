<script>
document.addEventListener("DOMContentLoaded", function() {
  // Función para detectar dispositivos Apple
  function isAppleDevice() {
    return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
  }
  
  const isApple = isAppleDevice();

  // Reemplazar el contenido de #initialVideo según el dispositivo
  const initialVideoContainer = document.getElementById('initialVideo');
  if (initialVideoContainer) {
    initialVideoContainer.innerHTML = ""; // Limpiar contenido existente
    let initialMedia;
    if (isApple) {
      // Usamos una imagen (GIF) en lugar de un video
      initialMedia = document.createElement("img");
      initialMedia.src = "https://cdn.taxdown.es/offline-assets/2025/03/busta-gif-3.gif";
      initialMedia.width = 200;
      initialMedia.height = 250;
    } else {
      initialMedia = document.createElement("video");
      initialMedia.src = "https://cdn.taxdown.es/offline-assets/2025/03/busta-bailando-v3.webm";
      initialMedia.autoplay = true;
      initialMedia.muted = true;
      initialMedia.loop = true;
      initialMedia.width = 200;
      initialMedia.height = 250;
    }
    initialVideoContainer.appendChild(initialMedia);
  }
  
  // Usamos IntersectionObserver para iniciar la cuenta atrás cuando el módulo esté visible
  const popUp = document.getElementById("popUp");
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Iniciamos la cuenta atrás de 7 segundos
        setTimeout(function() {
          const popUpContent = document.getElementById("popUpContent");
          popUpContent.style.transition = "opacity 0.5s ease";
          popUpContent.style.opacity = "0";
          
          // Tras 500 ms, se actualiza el contenido
          setTimeout(function() {
            popUpContent.innerHTML = "";
            
            // Agregamos el encabezado con "Salvo este descuentazo"
            const headerDiscount = document.createElement("div");
            headerDiscount.className = "edp-pop-up-header";
            headerDiscount.textContent = "Salvo este descuentazo";
            popUpContent.appendChild(headerDiscount);
            
            // Contenedor para organizar las columnas
            const contentWrapper = document.createElement("div");
            const threeColumns = document.createElement("div");
            threeColumns.className = "three-columns";
            
            // Columna 1: Video/GIF
            const col1 = document.createElement("div");
            col1.className = "column";
            let media1;
            if (isApple) {
              media1 = document.createElement("img");
              media1.src = "https://cdn.taxdown.es/offline-assets/2025/03/busta-gif-3.gif";
              media1.width = 150;
              media1.height = 190;
            } else {
              media1 = document.createElement("video");
              media1.src = "https://cdn.taxdown.es/offline-assets/2025/03/busta-bailando-v3.webm";
              media1.autoplay = true;
              media1.muted = true;
              media1.loop = true;
              media1.width = 150;
              media1.height = 190;
            }
            col1.appendChild(media1);
            
            // Columna 2: Texto (más ancha, con clase "text-column")
            const col2 = document.createElement("div");
            col2.className = "column text-column";
            const contentText = document.createElement("div");
            contentText.className = "edp-pop-up-content";
            contentText.innerHTML = "<br><strong>Haz ahora tu declaración de la renta con un 10% de descuento</strong><br><br>Regístrate y usa el código: ADIOSHACIENDA10";
            col2.appendChild(contentText);
            
            // Columna 3: Video/GIF
            const col3 = document.createElement("div");
            col3.className = "column";
            let media2;
            if (isApple) {
              media2 = document.createElement("img");
              media2.src = "https://cdn.taxdown.es/offline-assets/2025/03/busta-gif-3.gif";
              media2.width = 150;
              media2.height = 190;
            } else {
              media2 = document.createElement("video");
              media2.src = "https://cdn.taxdown.es/offline-assets/2025/03/busta-bailando-v3.webm";
              media2.autoplay = true;
              media2.muted = true;
              media2.loop = true;
              media2.width = 150;
              media2.height = 190;
            }
            col3.appendChild(media2);
            
            // Agregar las columnas al contenedor de filas
            threeColumns.appendChild(col1);
            threeColumns.appendChild(col2);
            threeColumns.appendChild(col3);
            contentWrapper.appendChild(threeColumns);
            
            // Contenedor para el botón
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            const registerLink = document.createElement("a");
            registerLink.href = "https://app.taxdown.es/";
            registerLink.className = "solid_btn responsive_global_btn green";
            registerLink.textContent = "Empieza GRATIS";
            buttonContainer.appendChild(registerLink);
            
            // Insertamos todo en popUpContent
            popUpContent.appendChild(contentWrapper);
            popUpContent.appendChild(buttonContainer);
            
            // Restauramos la opacidad con efecto fade-in
            popUpContent.style.opacity = "1";
            popUpContent.classList.add("fade-in");
          }, 500);
        }, 5000);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(popUp);
});
</script>