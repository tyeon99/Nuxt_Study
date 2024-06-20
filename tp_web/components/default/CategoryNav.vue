<template>
  <div class="categoryNav">
    <div class="home">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8.306 1.10674C8.21728 1.03756 8.108 1 7.9955 1C7.883 1 7.77372 1.03756 7.685 1.10674L0.5 6.70924L1.1215 7.49524L2 6.81024V12.9997C2.00053 13.2648 2.10606 13.5188 2.29348 13.7063C2.4809 13.8937 2.73495 13.9992 3 13.9997H13C13.2651 13.9992 13.5191 13.8937 13.7065 13.7063C13.8939 13.5188 13.9995 13.2648 14 12.9997V6.81474L14.8785 7.49974L15.5 6.71374L8.306 1.10674ZM9 12.9997H7V8.99974H9V12.9997ZM10 12.9997V8.99974C9.99973 8.7346 9.89429 8.4804 9.70681 8.29292C9.51934 8.10544 9.26513 8 9 7.99974H7C6.73486 8 6.48066 8.10544 6.29319 8.29292C6.10571 8.4804 6.00026 8.7346 6 8.99974V12.9997H3V6.03074L8 2.13574L13 6.03574V12.9997H10Z"
          fill="#B5B5B6" />
      </svg>
    </div>
    <div class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <g clip-path="url(#clip0_136_7031)">
          <path
            d="M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z"
            fill="#D9D9D9" />
        </g>
        <defs>
          <clipPath id="clip0_136_7031">
            <rect width="10" height="10" fill="white" transform="translate(10 10) rotate(-180)" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div 
      v-for="(category, index) in categorys" 
      :key="'category_' + index" 
      :class="{ 'categoryName': true, 'active': index === categoryIndex, 'hidden': index !== categoryIndex }"
    >
    <span class="ko">
      {{ category.ko }}
    </span>
    <span class="en">
      {{  category.en }}
    </span>
    </div>
    <div class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <g clip-path="url(#clip0_136_7031)">
          <path
            d="M3.30779 8.97716C3.19062 8.85996 3.1248 8.70102 3.1248 8.53529C3.1248 8.36956 3.19062 8.21062 3.30779 8.09341L6.40154 4.99967L3.30779 1.90591C3.19394 1.78804 3.13094 1.63016 3.13237 1.46629C3.13379 1.30242 3.19952 1.14566 3.3154 1.02978C3.43128 0.913898 3.58804 0.848168 3.75191 0.846744C3.91579 0.84532 4.07366 0.908316 4.19154 1.02216L7.72717 4.55779C7.84433 4.67499 7.91016 4.83394 7.91016 4.99967C7.91016 5.16539 7.84433 5.32434 7.72717 5.44154L4.19154 8.97716C4.07433 9.09433 3.91539 9.16016 3.74966 9.16016C3.58394 9.16016 3.42499 9.09433 3.30779 8.97716Z"
            fill="#D9D9D9" />
        </g>
        <defs>
          <clipPath id="clip0_136_7031">
            <rect width="10" height="10" fill="white" transform="translate(10 10) rotate(-180)" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div 
      v-for="(menu, index) in menus" 
      :key="'menu_' + index" 
      :class="{ 'categoryMenu': true, 'active': index === activeIndex, 'hidden': index !== activeIndex }"
    >
      <span class="ko">
        {{  menu.ko  }}
      </span>
      <span class="en">
        {{  menu.en  }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryIndex: {
      type: Number,
      default: 0
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      categorys: [
      { ko: '회사소개', en: 'About Us' },
      { ko: 'ThinkPool AI', en: 'ThinkPool AI' },
      { ko: '위치기반서비스', en: 'LBS' },
      { ko: '리스크관리솔루션', en: 'RMS' },
      { ko: '기업부설연구소', en: 'R&D Center' },
      { ko: '홍보센터', en: 'PR' },
      { ko: 'IR', en: 'IR' },
      { ko: '채용정보', en: 'Careers' },
      ],
      menus: [
      { ko: '회사개요', en: 'Corporate Overview' },
      { ko: 'CEO메시지', en: 'CEO Message' },
      { ko: '비전', en: 'VISION' },
      { ko: '연혁', en: 'Milestones' },
      { ko: '특허', en: 'Patent' },
      { ko: '수상', en: 'Awards' },
      { ko: '인증', en: 'Certification' },
      { ko: '복지제도', en: 'Welfare System' },
      { ko: '인재상', en: 'Our Values' },
      { ko: '오시는길', en: 'Contact' },
      { ko: 'AX RASSI', en: 'AX RASSI' },
      { ko: 'ThinkPool AI Algorithm', en: 'ThinkPool AI Algorithm' },
      { ko: '로그인보호서비스', en: 'Login Protection Services' },
      { ko: '안심키퍼서비스', en: 'SafeKeeper Service' },
      { ko: 'RMS통제시스템', en: 'RMS System' },
      { ko: '국가R&D', en: 'National R&D' },
      { ko: '병역특례', en: 'Technical Research Personnel' },
      { ko: '공지사항', en: 'Notice' },
      { ko: 'NEWS', en: 'NEWS' },
      { ko: 'IR', en: 'IR' },
      { ko: '채용공고', en: 'Recruit' },
      ]
    };
  },
};
</script>

<style scoped>
  .categoryNav{
    @apply mt-[80px] w-full flex justify-start items-center gap-[5px] pl-[250px] pt-[13px];
  }

  .categoryName{
    @apply text-[#b5b5b6] text-[14px] font-normal leading-[21px];
  }

  .categoryMenu{
    @apply text-[#b5b5b6] text-[14px] font-normal leading-[21px];
  }
  
  .categoryMenu.active{
    @apply text-[#141414] font-bold;
  }
</style>