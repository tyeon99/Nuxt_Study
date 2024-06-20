<template>
  <div class="AwardContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="awardBox">
          <div class="date">2022.12</div>
          <div class="img">
            <img src="~/assets/img/award01.png" alt="">
          </div>
          <div class="detail ko">벤처창업진흥 유공포상<br>국무총리상 수상</div>
          <div class="detail en"></div>
        </div>
        <div class="awardBox">
          <div class="date">2016.12</div>
          <div class="img">
            <img src="~/assets/img/award02.png" alt="">
          </div>
          <div class="detail ko">2016 전자 ICT 특허 <br>경영대상 금상 수상</div>
          <div class="detail en"></div>
        </div>
        <div class="awardBox">
          <div class="date">2013.12</div>
          <div class="img">
            <img src="~/assets/img/award03.png" alt="">
          </div>
          <div class="detail ko">미래창조과학부장관상 <br> 수상</div>
          <div class="detail en"></div>
        </div>
        <div class="awardBox">
          <div class="date">2012.12</div>
          <div class="img">
            <img src="~/assets/img/award04.png" alt="">
          </div>
          <div class="detail ko">중소벤처유망LBS공모전 <br>최우수상 수상</div>
          <div class="detail en"></div>
        </div>
      </div>
      <div class="contentRight">
        <div class="contentList">
          <div class="list">
            <strong>2022.12</strong>
            <span class="ko">
              벤처창업진흥 유공포상 국무총리상 수상
            </span>
            <span class="en">
              Received the Prime Minister's Award for Meritorious Contribution to Venture Startup Promotion 
            </span>
          </div>
          <div class="list">
            <strong>2016.12</strong>
            <span class="ko">
              2016 전자 ICT 특허경영대상 금상 수상
            </span>
            <span class="en">
              Won the Gold Medal at the 2016 Electronic ICT Patent Management Awards 
            </span>
          </div>
          <div class="list">
            <strong>2013.12</strong>
            <span class="ko">
              인터넷기술선도부문 미래창조과학부장관상 수상
            </span>
            <span class="en">
              Minister of Science, ICT and Future Planning Award for Internet Technology Leadership  
            </span>
          </div>
          <div class="list">
            <strong>2012.12</strong>
            <span class="ko">
              방통위 중소벤처유망LBS공모전 최우수상 수상
            </span>
            <span class="en">
              Won the Grand Prize at the MSIT's Promising LBS Competition 
            </span>
          </div>
        </div>
        <div class="more">
          <button>더보기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .categoryContent{
    @apply !gap-[230px] !items-center;
  }

  .contentLeft{
    @apply grid grid-cols-2 gap-[40px];
  }

  .awardBox{
    @apply p-[30px] rounded-[12px] bg-[#fafafc] text-center;
  }

  .contentRight{
    @apply mt-[225px] w-auto;
  }

  .awardBox .img img{
    @apply w-[252px];
  }

  .date{
    @apply text-[#141414] text-[16px] font-bold leading-[18px] mb-[24px];
  }

  .detail{
    @apply mt-[24px] text-[#444] text-[16px] font-normal leading-[20px];
  }

  .contentRight{
    @apply mt-0 w-auto;
  }

  .contentList{
    @apply border-none m-0
  }

  .list{
    @apply flex-col !items-start !gap-[20px] border-none !px-0;
  }

  .list strong{
    @apply !text-[20px];
  }

  .list span{
    @apply !text-[#444] text-[18px] font-normal !leading-[30px];
  }

  .more{
    @apply mt-[50px];
  }

  .more button{
    @apply w-[175px] h-[40px] leading-[40px] rounded-[5px] bg-[#f4f5f6] text-[#141414] text-[14px] font-normal;
  }
</style>
