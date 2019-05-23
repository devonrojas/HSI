(function() {
  console.log(window.innerHeight, window.innerWidth);
  console.log(document.body.clientHeight, document.body.clientWidth);

  document.querySelector(".main-menu-button").addEventListener("click", e => {
    document.querySelector(".main-menu").classList.add("show-first");
    // document.body.style.overflow = "hidden";
  });

  document.querySelector(".close-menu").addEventListener("click", e => {
    document.querySelector(".main-menu").classList.remove("show-first");
    // document.body.style.overflow = "auto";
  });

  document.querySelector(".down-to-main").addEventListener("click", e => {
    scrollTo(document.querySelector(".main-content").offsetTop, 1200);
  });
})();

// Helper Functions

const scrollTo = function(to, duration) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function() {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
};
