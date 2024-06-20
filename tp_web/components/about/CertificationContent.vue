<template>
  <div class="CertificationContent">
    <div class="categoryContent">
      <div class="contentLeft">
        <div class="awardBox">
          <div class="date">2015.07</div>
          <div class="img">
            <img src="~/assets/img/certification01.png" alt="">
          </div>
          <div class="detail ko">기술혁신형 중소기업<br>(INNO-BIZ) 인증</div>
          <div class="detail en"></div>
        </div>
        <div class="awardBox">
          <div class="date">2015.07</div>
          <div class="img">
            <img src="~/assets/img/certification02.png" alt="">
          </div>
          <div class="detail ko">ETRI 1실1기업 맞춤형 <br> 기술지원 기업 선정</div>
          <div class="detail en"></div>
        </div>
        <div class="awardBox">
          <div class="date">2014.10</div>
          <div class="img">
            <img src="~/assets/img/certification03.png" alt="">
          </div>
          <div class="detail ko">연구개발기업으로 벤처 <br>기업 등록</div>
          <div class="detail en"></div>
        </div>
        <div class="awardBox">
          <div class="date">2012.12</div>
          <div class="img">
            <img src="~/assets/img/certification04.png" alt="">
          </div>
          <div class="detail ko">기업부설연구소 <br> 인정</div>
          <div class="detail en"></div>
        </div>
      </div>
      <div class="contentRight">
        <div class="contentList">
          <div class="list">
            <strong>2015.07</strong>
            <span class="ko">
              기술혁신형 중소기업(INNO-BIZ) 인증
            </span>
            <span class="en">
              Technologically Innovative Small Business (INNO-BIZ) Certification 
            </span>
          </div>
          <div class="list">
            <strong>2015.07</strong>
            <span class="ko">
              ETRI 1실1기업 맞춤형 기술지원 기업 선정
            </span>
            <span class="en">
              ETRI One-on-One Personalized Technical Support Enterprise Line
            </span>
          </div>
          <div class="list">
            <strong>2014.10</strong>
            <span class="ko">
              연구개발기업으로 벤처기업 등록
            </span>
            <span class="en">
              Registered venture as an R&D company 
            </span>
          </div>
          <div class="list">
            <strong>2012.12</strong>
            <span class="ko">
              기업부설연구소 인정
            </span>
            <span class="en">
              Recognition of Corporate Research Centers 
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
