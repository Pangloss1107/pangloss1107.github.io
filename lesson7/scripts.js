const imagestoload = document.querySelectorAll("[data-src]");


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagestoload.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagestoload.forEach((img) => {
      loadImages(img);
    });
  }