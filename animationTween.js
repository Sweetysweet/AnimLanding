TweenMax.from(".right", 1.6, {
           delay: 0.6,
           // opacity: 0,
           // x: -20,
           width: 0,
           ease: Expo.easeInOut
     });

      TweenMax.from(".logo", 1, {
            delay: 1,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".next", 1, {
            delay: 1.2,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".watch", 1, {
            delay: 1.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".cart", 1, {
            delay: 1.6,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".product-title", 2, {
            delay: 1.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".desc", 2, {
            delay: 1.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#price", 2, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".btn", 2, {
            delay: 2.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".right-sidebar ul li", 1, {
            delay: 2.6,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.08);

      TweenMax.from(".left-bottom", 2, {
            delay: 2.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".media ul li", 1, {
            delay: 3.6,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.08);

      TweenMax.from(".product img", 3, {
            delay: 2,
            // opacity: 0,
            // y: 20,
            scale: 0,
            ease: Expo.easeInOut
      });

      TweenMax.to(".product img", 3, {
            delay: 2,
            // opacity: 0,
            // y: 20,
            scale: 1,
            ease: Expo.easeInOut
      });