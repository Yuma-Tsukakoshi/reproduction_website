'use strict';

let box_html1 = "";
let box_html2 = "";
for(let i=0 ; i<16 ; i++){
  if(i<12){
    box_html1 += `<div class="product-box" data_id="${i+1}">
  <a class="image-link"><img src="./assets/img/item${i+1}.jpg" alt="product-img"></a>
  <h3 class="product-title">プロダクトタイトルプロダクトタイトル</h3>
  <p class="money">￥99,999+tax</p>
</div>`
  }else{
    box_html2 += `<div class="product-box" data_id="${i+1}">
  <a class="image-link"><img src="./assets/img/item${i+1}.jpg" alt="product-img"></a>
  <h3 class="product-title">プロダクトタイトルプロダクトタイトル</h3>
  <p class="money">￥99,999+tax</p>
</div>`
  }
}

$("#js-products-1").html(box_html1);
$("#js-products-2").html(box_html2).hide();

const createProductHTML=(selectNumber)=>{
  let ProductHTML = "";
  ProductHTML += `<div class="product-page">
  <h2 class="praduct-title">プロダクトタイトル</h2>
  <div class="product-inner">
    <figure class="product-img">
      <img src="./assets/img/item${selectNumber}.jpg" alt="">
    </figure>
    <div class="product-content">
      <p class="product-introduce">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p class="product-introduce">テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p class="money">￥99,999+tax</p>
      <div class="product-detail">
        <ul class="detail-list">
          <li class="detail-items title">SIZE:<span class="text">W999 × D999 × H999</span></li>
          <li class="detail-items title">COLOR:<span class="text">テキスト</span></li>
          <li class="detail-items title">MATERIAL:<span class="text">テキストテキストテキスト</span></li>
        </ul>
      </div>
    </div>
  </div>
  <a href="./index.html" class="back-to-product">Back To Products</a>
</div>`
  $(".product-link").html(ProductHTML);
  $(".products").hide();
  $(".main-title").hide();
}

$(".product-box").each(function(){
  $(this).on('click',function(){
    const selectedProduct=Number($(this).attr('data_id'))
    createProductHTML(selectedProduct);
  })
})

$("#link1_btn").on('click',function(){
  $("#js-products-1").show();
  $("#js-products-2").hide();
})

$("#link2_btn").on('click',function(){
  $("#js-products-2").show();
  $("#js-products-1").hide();
})

$("#js-about").hide();
$("#js-about-link").on("click",function(){
  $(".main-title").hide();
  $("#js-products-1").hide();
  $("#js-about").show();
  $(".product-link").hide();
  $("#js-contact").hide();
  $(".hambarger").removeClass("active");
  $("#side-menu").removeClass("active");
  $(".side-menu-list").removeClass("active");
})

$("#js-contact").hide();
$("#js-contact-link").on("click",function(){
  $(".main-title").hide();
  $("#js-products-1").hide();
  $("#js-contact").show();
  $(".product-link").hide();
  $("#js-about").hide();
  $(".hambarger").removeClass("active");
  $("#side-menu").removeClass("active");
  $(".side-menu-list").removeClass("active");
})

// ハンバーガ
$(".togglebutton").on("click",function(){
  $("#side-menu").toggleClass("active");
  $(".hambarger").toggleClass("active");
  $(".side-menu-list").toggleClass("active");
})

// ページの初期化
$("#init-pages").on("click",function(){
  $("#js-products-1").show();
  $("#js-products-2").hide();
  $(".main-title").show();
  $(".product-link").show();
  $("#js-about").hide();
  $("#js-contact").hide();
  $(".side-menu").show();
})


