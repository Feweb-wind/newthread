<template>
    <div class="team-item">
        <div class="item-content">
            <h4>{{title}}</h4>
            <div>
                <span>{{content}}</span>
            </div>
        </div>
        <div class="item-pic">
            <img :src="imgUrl">
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
    .team-item{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 40px;
        padding-right: 65px;
        border: 1px solid #767676;
        .item-content{
            flex: 1;
            h4{
                font-size: 34px;
                font-family: PingFang SC-Semibold, PingFang SC;
                font-weight: 600;
                color: #121212;
            }
            span{
                font-size: 22px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
            }
        }
        .item-pic{
            width: 211px;
            height: 232px;
            margin-left: 40px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
  </style>
  