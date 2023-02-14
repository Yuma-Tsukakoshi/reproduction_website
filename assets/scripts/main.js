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