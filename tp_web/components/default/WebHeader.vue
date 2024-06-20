<template>
  <div class="webHeader">

    <div class="headerLogo">
      <nuxt-link to="/">
        <img src="~/assets/img/logo.png" alt="헤더 로고">
      </nuxt-link>
    </div>

    <div class="headerNav">

      <div class="navList">
        <button class="ko list01">회사소개</button>
        <button class="en list01">About Us</button>
        <button class="list02">ThinkPool AI</button>
        <button class="ko list03">위치기반서비스</button>
        <button class="en list03">LBS</button>
        <button class="ko list04">리스크관리솔루션</button>
        <button class="en list04">RMS</button>
        <button class="ko list05">기업부설연구소</button>
        <button class="en list05">R&D Center</button>
        <button class="ko list06">홍보센터</button>
        <button class="en list06">PR</button>
        <button class="list07">IR</button>
        <button class="ko list08">채용정보</button>
        <button class="en list08">Careers</button>
      </div>

      <div class="headerNavCon opacity-0 invisible">

        <div class="menuList list01">
          <nuxt-link to="/about/corporateOverview" class="ko">회사개요</nuxt-link>
          <nuxt-link to="/about/corporateOverview" class="en">Corporate Overview</nuxt-link>
          <nuxt-link to="/about/ceoMessage" class="ko">CEO메시지</nuxt-link>
          <nuxt-link to="/about/ceoMessage" class="en">CEO Message</nuxt-link>
          <nuxt-link to="/about/ourVision" class="ko">비전</nuxt-link>
          <nuxt-link to="/about/ourVision" class="en">VISION</nuxt-link>
          <nuxt-link to="/about/milestones01" class="ko">연혁</nuxt-link>
          <nuxt-link to="/about/milestones01" class="en">Milestones</nuxt-link>
          <nuxt-link to="/about/patent" class="ko">특허</nuxt-link>
          <nuxt-link to="/about/patent" class="en">Patent</nuxt-link>
          <nuxt-link to="/about/award" class="ko">수상</nuxt-link>
          <nuxt-link to="/about/award" class="en">Award</nuxt-link>
          <nuxt-link to="/about/certification" class="ko">인증</nuxt-link>
          <nuxt-link to="/about/certification" class="en">Certification</nuxt-link>
          <nuxt-link to="/about/welfare" class="ko">복지제도</nuxt-link>
          <nuxt-link to="/about/welfare" class="en">Welfare System</nuxt-link>
          <nuxt-link to="/about/ourValues" class="ko">인재상</nuxt-link>
          <nuxt-link to="/about/ourValues" class="en">Our Values</nuxt-link>
          <nuxt-link to="/about/contact" class="ko">오시는 길</nuxt-link>
          <nuxt-link to="/about/contact" class="en">Contact</nuxt-link>
        </div>

        <div class="menuList list02">
          <nuxt-link to="/thinkpoolAi/axRassi">AX RASSI</nuxt-link>
          <nuxt-link to="/thinkpoolAi/aiAlgorithms">ThinkPool AI Algorithm</nuxt-link>
        </div>

        <div class="menuList list03">
          <nuxt-link to="/lbs/loginProtection" class="ko">로그인보호서비스</nuxt-link>
          <nuxt-link to="/lbs/loginProtection" class="en">Login Protection<br> Services</nuxt-link>
          <nuxt-link to="/lbs/safeKeeper" class="ko">안심키퍼서비스</nuxt-link>
          <nuxt-link to="/lbs/safeKeeper" class="en">SafeKeeper <br> Service</nuxt-link>
        </div>

        <div class="menuList list04">
          <nuxt-link to="/rms/rmsSystem" class="ko">RMS통제시스템</nuxt-link>
          <nuxt-link to="/rms/rmsSystem" class="en">RMS System</nuxt-link>
        </div>

        <div class="menuList list05">
          <nuxt-link to="/rdcenter/rdNational01" class="ko">국가R&D</nuxt-link>
          <nuxt-link to="/rdcenter/rdNational01" class="en">National R&D</nuxt-link>
          <nuxt-link to="/rdcenter/personnel" class="ko">병역특례</nuxt-link>
          <nuxt-link to="/rdcenter/personnel" class="en">Technical Research <br> Personnel</nuxt-link>
        </div>

        <div class="menuList list06">
          <nuxt-link to="/pr/notice" class="ko">공지사항</nuxt-link>
          <nuxt-link to="/pr/notice" class="en">Notice</nuxt-link>
          <nuxt-link to="/pr/news">NEWS</nuxt-link>
        </div>

        <div class="menuList list07">
          <nuxt-link to="/ir/ir">IR</nuxt-link>
        </div>

        <div class="menuList list08">
          <nuxt-link to="/careers/recruit" class="ko">채용공고</nuxt-link>
          <nuxt-link to="/careers/recruit" class="en">Recruit</nuxt-link>
        </div>

      </div>
    </div>

    <div class="changeLang">
      <button :class="{ active: isKorActive }" @click="changeKor">KR</button>
      <button :class="{ active: isEngActive }" @click="changeEng">EN</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isKorActive: true,
      isEngActive: false,
    }
  },
  mounted() {
    const headerNav = this.$el.querySelector('.headerNav');
    const headerNavCon = this.$el.querySelector('.headerNavCon');
    const nuxtLinks = this.$el.querySelectorAll('.menuList a');

    headerNav.addEventListener('mouseover', () => {
      headerNavCon.classList.toggle('opacity-100', true);
      headerNavCon.classList.toggle('visible', true);
      headerNavCon.classList.toggle('opacity-0', false);
      headerNavCon.classList.toggle('invisible', false);
    });

    headerNav.addEventListener('mouseleave', () => {
      headerNavCon.classList.toggle('opacity-100', false);
      headerNavCon.classList.toggle('visible', false);
      headerNavCon.classList.toggle('opacity-0', true);
      headerNavCon.classList.toggle('invisible', true);
    });

    nuxtLinks.forEach(link => {
      link.addEventListener('click', this.hideMenu);
    });
  },
  methods: {
    changeKor() {
      this.isKorActive = !this.isKorActive
      if (this.isKorActive) {
        this.isEngActive = false;
        document.body.classList.toggle('eng');
        document.body.classList.toggle('kor');
      } 
    },
    changeEng() {
      this.isEngActive = !this.isEngActive
      if (this.isEngActive) {
        this.isKorActive = false;
        document.body.classList.toggle('kor');
        document.body.classList.toggle('eng');
      } 
    },
    hideMenu() {
      const headerNavCon = this.$el.querySelector('.headerNavCon');
      if (headerNavCon) {
        headerNavCon.classList.toggle('opacity-0', true);
        headerNavCon.classList.toggle('invisible', true);
        headerNavCon.classList.toggle('opacity-100', false);
        headerNavCon.classList.toggle('visible', false);
      }
    }
  },
}
</script>

<style scoped>
.webHeader {
  @apply w-full max-w-[1920px] min-w-[1640px] h-[80px] leading-[80px] flex justify-between items-center border-b-[1px] border-[#d9d9d9] z-[999] fixed bg-[#fff];
}

.headerLogo img {
  @apply w-[272px];
}

.headerNav {
  @apply relative z-[999];
}

.navList {
  @apply flex justify-center items-center gap-[30px];
}

.navList button {
  @apply text-center w-auto h-[80px] leading-[80px] text-[#141414] text-[20px] font-normal;
}

.headerNavCon{
  @apply absolute max-w-[1920px] w-[1940px] left-[-464px] flex justify-start items-start gap-[30px] bg-[#fff] pl-[464px] overflow-hidden duration-[0.4s];
}

.menuList{
  @apply w-auto flex flex-col pt-[13px] pb-[40px];
}

.menuList a{
  @apply text-[#000] text-[14px] leading-[30px] font-normal text-center;
}

.changeLang {
  @apply flex justify-center items-center gap-[10px] px-[24px];
}

.changeLang button {
  @apply p-[5px_18px] leading-[16px] bg-[#f6f6f6] border border-[#d9d9d9] rounded-[13px] text-[#c9c9c9] text-[13px] font-normal;
}

.changeLang button.active {
  @apply bg-[#fff] text-[#141414];
}
</style>