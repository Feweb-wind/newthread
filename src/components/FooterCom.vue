<template>
    <footer>
        <div class="footer-inner">
            <div class="footer-schoollogo">
                <img src="../assets/img/school-logo.png" alt="">
            </div>
            <div class="footer-link">
                <div><span>团队介绍</span><span>团队动态</span></div>
                <div><span>团队招新</span><span>荣誉成果</span></div>
                <div class="link-last"><span>积分网站</span></div>
            </div>
            <div class="footer-contact">
                <div class="contact-us">联系我们</div>
                <div class="tel">
                    <img src="../assets/img/phone-logo.png" alt="">
                    <span>18272013800</span>
                </div>
                <div class="qq">
                    <img src="../assets/img/qq-logo.png" alt="">
                    <span>1511074830</span>
                </div>
                <div class="email">
                    <img src="../assets/img/email-logo.png" alt="">
                    <span>1511074830@qq.com</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

export default {
  props: {
    msg: String
  },
  components:{

  }
}
</script>
<style scoped lang="less">
    footer{
        width: 100%;
        background: #878298;
        .footer-inner{
            max-width: 1276px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .footer-schoollogo{
                padding: 110px 0 65px 0;
                img{
                    width: 280px;
                }
            }
            .footer-link{
                width: 320px;
                height: 168px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 28px;
                font-family: PingFang SC-Semibold, PingFang SC;
                font-weight: 600;
                color: #EFEFEF;
                div{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }
                .link-last{
                    justify-content: center;
                }
            }
            .footer-contact{
                display: flex;
                height: 300px;
                flex-direction: column;
                text-align: left;
                justify-content: space-around;
                align-self: flex-start;
                .contact-us{
                    font-size: 50px;
                    font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
                    font-weight: 400;
                    color: #4D4B6C;
                }
                .tel,.qq,.email{
                    font-size: 30px;
                    font-family: YuMincho +36p Kana-Medium, YuMincho +36p Kana;
                    font-weight: 500;
                    color: #272727;
                    display: flex;
                    align-items: center;
                }
                img{
                    width: 48px;
                    margin-right: 40px;
                }
            }
        }
    }
</style>