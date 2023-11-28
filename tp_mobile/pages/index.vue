<template>
  <div class="wrap" data-server-rendered="true">


    <Header />

    <introScreen />

    <div class="landingContent">

      <aiSection />
      <lbsSection />
      <rmSection />
      <rdSection />
      <newsNotice />
      <notiNotice />

      <div class="possession">
        <p>
          씽크풀은 <br>
          총 <span>97건</span>의 <span>등록특허</span>와 <br>
          <span>11건</span>의 <span>특허출원</span>을 <br>
          보유하고 있습니다.
        </p>
      </div>

      <tpInquiry />

    </div>

    <Footer />

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="css" scoped>
  @import '~/assets/css/style';
</style>