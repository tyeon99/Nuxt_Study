<template>
  <div class="companyExp">
    <table>
      <colgroup>
        <col width="30%">
        <col width="70%">
      </colgroup>
      <tbody>
        <tr>
          <th>회사명</th>
          <td>㈜ 씽크풀 (ThinkPool.co.Ltd.)</td>
        </tr>
        <tr>
          <th>대표이사</th>
          <td>김 동 진</td>
        </tr>
        <tr>
          <th>설립연월</th>
          <td>1994.1월</td>
        </tr>
        <tr>
          <th>자본금</th>
          <td>35.7억 원 [자본총계 170억원]</td>
        </tr>
        <tr>
          <th>종업원수</th>
          <td>71명</td>
        </tr>
        <tr>
          <th>사업분야</th>
          <td>빅데이터ㆍAI  기반의 투자금융 <br>부문등 컨텐츠 생산/ 알고리즘 </td>
        </tr>
        <tr>
          <th>특허현황</th>
          <td>등록 97건 출원 11건</td>
        </tr>
        <tr>
          <th>회사위치</th>
          <td>서울시 영등포구 국제금융로 <br>70 15층 (여의도동 미원빌딩)</td>
        </tr>
        <tr>
          <th>기타</th>
          <td>기술벤처기업(스타벤처) <br>이노비즈 기업부설연구소 </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'companyExp',
}
</script>

<style lang="css" scoped>
  .companyExp{
    @apply p-[0px_20px_60px];
  }

  table{
    @apply w-full border-t-[1.2px] border-[#8C8C8C];
  }

  tr{
    @apply border-b border-[#F0F0F0];
  }

  th{
    @apply text-black text-[12px] font-bold text-left p-[12px_30px_12px_20px];
  }

  td{
    @apply text-black text-[12px] font-normal text-left p-[12px_0px_12px_30px];
  }
</style>