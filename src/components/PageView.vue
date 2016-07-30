<template>
  <div class="content">
    <div class="img-wraper fluid-wraper">
      <img src="http://ww2.sinaimg.cn/mw690/63c9e579jw1f61p048gsaj21jk1nfgy4.jpg" id="face"/>
    </div>
    <div class="upfilewrapper fileUploader">
      <input type="file" class="weui_btn weui_btn_default" id="fileUploader" accept="image/*">
      <span class="upInfo">上传照片</span>
    </div>
    <div class="intro">
      <p>上传单人或双人</p>
      <p>正面免冠 无遮挡自拍</p>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .content > img {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 14px;
  }

  .content .square {
    position: absolute;
    border: 1px solid rgb(255, 72, 122);
  }
  .fluid-wraper {
    position: relative;
    margin: 4.4rem 1.3rem 1rem;
    padding-bottom: 63.45%;
    padding-top: 0;
    height: 0;
    overflow: hidden;
  }
  .fluid-wraper img {
    position: absolute;
    top: .4rem;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .triangle {
    position: absolute;
  }
  .footer {
    margin-top: 1.2rem;
    font-size: 16px;
  }
  .upfilewrapper {
    position: relative;
    width: 50%;
    height: 1.4rem;
    margin: 0 auto;
    padding: .1rem 0;
    line-height: 1.4rem;
    text-align: center;
    font-size: 15px;
    color: #fff;
    background: url(../assets/img/button.png) no-repeat 50% 50%;
    background-size: 100%;
    border: none;
    outline: none;
  }
  .upInfo {
    position: absolute;
    top: .1rem;
    left: 1.7rem;
  }
  .change {
    position: relative;
  }
  .change .upInfo {
    top: 0;
    left: 0;
  }
  input {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 98%;
    opacity: 0;
    filter: alpha(opacity=0);
    z-index: 10;
  }
  .intro {
    width: 50%;
    margin: .6rem auto 0;
    font-size: 16px;
    text-align: center;
  }
  .fusioning {
    text-align: center;
  }
  .flexbox {
    display: flex;
    justify-content: center;
  }
  .intro p {
    line-height: 1.5;
    color: #fff;
  }

  .flexbox .change {
    width: 50%;
  }
  .flexbox .add {
    display: block;
    flex: 1;
  }
  .imgswrapper img {
    width: 100%;
  }

  [data-dpr = "2"] .fluid-wraper {
    margin: 4.3rem 1.3rem 1rem;
  }
</style>
