    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      // --------------------------------------
      // 自动
       autoplay: {
        delay: 2500,//延迟
        disableOnInteraction: false,
      },
      // --------------------------------------
      // 分页焦点
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // --------------------------------------
      // 左右按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // --------------------------------------
      loop:true,
      // --------------------------------------
      // 切换效果
      // slide fade  cube coverflow flip
      effect : 'slide',
      fadeEffect: {
        crossFade: true,
      },
      // --------------------------------------
      // 滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      // --------------------------------------
      // 滑动方向
      // horizontal  vertical
      direction : 'horizontal',
      // --------------------------------------
      // 滚动时间
      speed:300
    });