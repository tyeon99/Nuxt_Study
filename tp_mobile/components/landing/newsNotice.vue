<template>
  <div class="notice news">

    <div class="notice-title">
      <div class="title-txt">뉴스</div>
      <button class="title-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54089 3.2317L18 11.5L8.54089 19.7683C8.19536 20.0712 7.62718 20.078 7.27182 19.7835C6.93517 19.5044 6.91029 19.0551 7.2024 18.751L7.25402 18.7017L15.4964 11.5L7.25402 4.2983C6.92668 4.01133 6.9166 3.56154 7.2186 3.26456L7.27182 3.21653C7.60848 2.9375 8.13614 2.92891 8.48454 3.18634L8.54089 3.2317Z" fill="#858B91" stroke="#858B91" stroke-width="0.4"/>
        </svg>
      </button>
    </div>

    <div class="notice-content">
      <button class="notice-list">
        <div class="list-content text-truncate">2022 벤처창업진흥 유공포상 국무총리상 수상</div>
        <div class="list-date">2022.10.20</div>
      </button>
      <button class="notice-list">
        <div class="list-content text-truncate">엔터플-씽크풀, AI분야 세계최고 SW개발에..</div>
        <div class="list-date">2022.10.20</div>
      </button>
      <button class="notice-list">
        <div class="list-content text-truncate">씽크풀 컨소시엄, 미래도전 국방기술개발과제..</div>
        <div class="list-date">2022.10.20</div>
      </button>
      <button class="notice-list">
        <div class="list-content text-truncate">MK라씨로 누적사용자 110만 5년간 연평균 20%</div>
        <div class="list-date">2022.10.20</div>
      </button>
      <button class="notice-list">
        <div class="list-content text-truncate">MK라씨로 누적사용자 110만 5년간 연평균 20%</div>
        <div class="list-date">2022.10.20</div>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'newsNotice',
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/notice';
</style>
