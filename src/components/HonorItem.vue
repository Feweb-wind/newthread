<template>
    <div class="honor-item">
        <div class="item-pic">
            <img :src="imgUrl">
        </div>
        <div class="item-content">
            <h4>{{title}}</h4>
            <div class="text">
                <span>{{content}}</span>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imgUrl:String,
      title:String,
      content:String
    }
  }
  </script>

  <style scoped lang="less">
    .honor-item{
        display: flex;
        flex-direction: column;
        width: 398px;
        height: 487px;
        box-shadow: 1px 3px 6px 1px rgba(0,0,0,0.16);
        .item-pic{
            height: 236px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .item-content{
            flex: 1;
            padding: 37px 40px 46px 29px;
            background-color: #ffffff;
            text-align: left;
            font-size: 23px;
            font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
            font-weight: 400;
            color: #212121;
            overflow: hidden;
            h4{
                margin-bottom: 15px;
            }
        }
    }
  </style>
  