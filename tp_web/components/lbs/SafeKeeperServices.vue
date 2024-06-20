<template>
  <div class="SafeKeeperServices">
    <div class="lbsWrap">
      <div class="pagination">
        <nuxt-link to="/lbs/loginProtection"></nuxt-link>
        <div class="line"></div>
        <a class="active"></a>
      </div>
      <div class="lbsContent">
        <nuxt-link to="/lbs/loginProtection" class="prevBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109" fill="none">
            <path d="M38.8105 54.5005L77.3784 14.8654C77.6959 14.5459 77.9469 14.1667 78.117 13.7497C78.287 13.3326 78.3726 12.8859 78.3688 12.4356C78.3651 11.9852 78.2721 11.54 78.0952 11.1258C77.9182 10.7117 77.6609 10.3367 77.3381 10.0226C77.0153 9.70849 76.6335 9.46154 76.2146 9.29601C75.7957 9.13048 75.3482 9.04966 74.8979 9.05823C74.4476 9.06681 74.0034 9.1646 73.5912 9.34595C73.1789 9.52731 72.8067 9.78862 72.4961 10.1148L31.6211 52.1252C31.0024 52.7611 30.6562 53.6133 30.6562 54.5005C30.6562 55.3877 31.0024 56.2399 31.6211 56.8758L72.4961 98.8862C72.8067 99.2123 73.1789 99.4737 73.5912 99.655C74.0034 99.8364 74.4476 99.9342 74.8979 99.9427C75.3482 99.9513 75.7957 99.8705 76.2146 99.705C76.6335 99.5394 77.0153 99.2925 77.3381 98.9784C77.6609 98.6643 77.9182 98.2893 78.0952 97.8751C78.2721 97.4609 78.3651 97.0158 78.3688 96.5654C78.3726 96.115 78.287 95.6684 78.117 95.2513C77.9469 94.8342 77.6959 94.455 77.3784 94.1356L38.8105 54.5005Z" fill="#C1C4DF"/>
          </svg>
        </nuxt-link>
        <div class="detail">
          <div class="img">
            <img src="~/assets/img/lbsImg02_ko.png" alt="" class="ko">
            <img src="~/assets/img/lbsImg02_en.png" alt="" class="en">
          </div>
          <div class="explanation">
            <div class="subTitle ko">위치기반서비스</div>
            <div class="subTitle en">LBS</div>
            <div class="title ko">안심키퍼서비스</div>
            <div class="title en">SafeKeeper<br> Service</div>
            <div class="serIntro ko">24시간 PC접속 감시</div>
            <div class="serIntro en">24-hour PC access monitoring</div>
            <div class="serIntroTxt ko">
              안심키퍼 서비스는 타인이 나의 PC로 <br>접속을 시도할 경우 SMS 문자를 통해 <br>알람을 주고 이용자가 즉시 차단 또는 <br>예약 종료를 할 수 있는 개인정보 보호<br>서비스입니다.
            </div>
            <div class="serIntroTxt en">
              The SafeKeeper service is a privacy <br>protection service that alerts you via<br> SMS when someone tries to access <br>your PC and allows you to block or<br> cancel the reservation immediately. 
            </div>
          </div>
        </div>
        <nuxt-link to="/lbs/loginProtection" class="nextBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109" fill="none">
            <path d="M70.1895 54.4995L31.6216 94.1347C31.3041 94.4541 31.0531 94.8333 30.883 95.2503C30.713 95.6674 30.6274 96.1141 30.6312 96.5644C30.6349 97.0148 30.7279 97.46 30.9048 97.8742C31.0818 98.2883 31.3391 98.6633 31.6619 98.9774C31.9847 99.2915 32.3665 99.5385 32.7854 99.704C33.2043 99.8695 33.6518 99.9503 34.1021 99.9418C34.5524 99.9332 34.9966 99.8354 35.4088 99.6541C35.8211 99.4727 36.1933 99.2114 36.5039 98.8852L77.3789 56.8748C77.9976 56.2389 78.3437 55.3867 78.3437 54.4995C78.3437 53.6123 77.9976 52.7601 77.3789 52.1242L36.5039 10.1138C36.1933 9.78765 35.8211 9.52635 35.4088 9.345C34.9966 9.16365 34.5524 9.06585 34.1021 9.05728C33.6518 9.04871 33.2043 9.12952 32.7854 9.29505C32.3665 9.46058 31.9846 9.70753 31.6618 10.0216C31.3391 10.3357 31.0817 10.7107 30.9048 11.1249C30.7279 11.5391 30.6349 11.9842 30.6311 12.4346C30.6274 12.885 30.713 13.3316 30.883 13.7487C31.053 14.1658 31.3041 14.545 31.6216 14.8644L70.1895 54.4995Z" fill="#C1C4DF"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .SafeKeeperServices{
    @apply flex justify-center items-center p-[48px_0_150px];
  }

  .pagination{
    @apply flex justify-center items-center gap-0 mb-[20px];
  }

  .pagination a{
    @apply w-[14px] h-[14px] rounded-full bg-[#C1C4DF];
  }

  .pagination a.active{
    @apply bg-[#5368ff];
  }

  .pagination .line{
    @apply w-[36px] border-t-[1px] border-[#c1c4df] border-dashed;
  }

  .detail{
    @apply flex justify-center items-center gap-[200px];
  }

  .img{
    @apply relative;
  }

  .txtBox{
    @apply absolute w-[427px] rounded-[12px] p-[30px_25px] bg-[#fff] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] text-[#444] text-[14px] font-normal leading-[20px] left-[18px];
  }

  .explanation{
    @apply mt-[30px] w-[400px];
  }

  .subTitle{
    @apply text-[#9395a1] text-[16px] font-normal leading-[20px] mb-[8px];
  }

  .title{
    @apply text-[#141414] text-[48px] font-bold leading-[60px] mb-[35px];
  }

  .serIntro{
    @apply text-[#141414] text-[28px] font-bold mb-[10px];
  }

  .serIntroTxt{
    @apply text-[#444] text-[20px] font-normal leading-[25px];
  }
</style>
