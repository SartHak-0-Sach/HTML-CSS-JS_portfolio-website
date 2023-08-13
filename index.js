// Convert square favicon to round using JavaScript
const favicon = document.querySelector("link[rel='icon']");
const roundedFavicon = document.createElement("link");
roundedFavicon.rel = "icon";
roundedFavicon.type = "image/x-icon";
roundedFavicon.href = "path-to-your-rounded-favicon.ico";

favicon.parentNode.insertBefore(roundedFavicon, favicon);
favicon.parentNode.removeChild(favicon);
