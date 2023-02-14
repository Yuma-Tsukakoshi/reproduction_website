'use strict';

let sneakersHTML = "";
for(let i=0; i<9 ; i++){
  sneakersHTML += `<div class="product-box">
  <figure>
    <img src="./assets/img/feature${i+1}.jpg" alt="">
  </figure>
  <div class="img-content">
    <h3 class="category">category</h3>
    <p class="content-text">テキストテキストテキストテキストテキストテキストテキストテキスト</p>
    <p class="content-date">XXXX.XX.XX</p>
  </div>
</div>`
}
$("#js-sneakers").html(sneakersHTML);

$("#js-toggle-btn").on("click",function(){
  $(".bar").toggleClass("active");
  $(".mask").toggleClass("active");
  $("#side-bar").toggleClass("active");
})

$("#js-pick_up, #js-feature, #js-contact").on("click",function(){
  $(".bar").removeClass("active");
  $(".mask").removeClass("active");
  $("#side-bar").removeClass("active");
})

$(function(){
  /*=================================================
  // カルーセル用 jQueryプラグイン「slick」
  // マニュアル：https://kenwheeler.github.io/slick/
  ===================================================*/
  $('#slider').slick({
    autoplay: true,                         // 自動再生オン
    autoplaySpeed: 2000,                    // スライドを3秒で切り替え
    // arrows: true,                           // 左右の矢印を表示
    // dots: true,                             // ドット（ページ送り）を表示
    slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
    centerMode: true,                       // センターモード（両端が見切れた状態になる）
    centerPadding: '18%',                   // 見切れたコンテンツの幅を18%に設定
    // prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
    // nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
    responsive: [              // レスポンシブの設定
      {
        breakpoint: 900,       // 900px以下の場合に適用
        settings: {
          centerMode: false    // センターモードをオフにする
        }
      }
    ]
  });
});