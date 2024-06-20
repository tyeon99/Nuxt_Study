<template>
  <div class="IrContent">
    <div>
      <div class="board">
        <div class="titleSpan">테스트입니다</div>
        <div class="boardList">
          <div v-for="(option, idx) in options" :key="'for_' + idx">
            <input
              type="radio"
              :id="'radio' + idx"
              name="radio"
              :value="option.value"
              v-model="selectValue"
            />
            <label :for="'radio' + idx">
              {{ option.label }}
            </label>
          </div>
        </div>
        <div class="more">
          <TestIF :options="options" :selectValue="selectValue" :computedScore="computedScore" @confirmBtn="confirmBtn"></TestIF>
          <div class="show" v-for="(option, idx) in options" :key="'show_' + idx">
            <span v-show="selectValue === option.value"> show조건문 {{ option.value }}번 </span>
          </div>
          <div class="computed">설문응답 점수::: {{ selectValue }}</div>
          <div>만족도 ::: {{ computedScore }}</div>
          <div>확정된 만족도 ::: {{ confirmValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestIF from './TestIF.vue'

export default {
  // 라디오 데이터로 묶고 for문으로 변경
  // if 조건문 으로 보여주기
  // show 조건문으로 보여주기
  // selectValue 라는 변수값에 선택한 점수 넣기
  // 설문응답점수 출력하기
  // div class="if" 컴포넌트 분리, 선언
  // 확정 버튼클릭시 확정된 만족도 옆에 confirmValue 라는 변수값 띄워주기
  components: {
    TestIF
  },
  data: () => ({
    selectValue: null,
    confirmValue: null,
    options: [
      { label: '매우 싫음', value: 1 },
      { label: '싫음', value: 2 },
      { label: '보통', value: 3 },
      { label: '좋음', value: 4 },
      { label: '매우 좋음', value: 5 }
    ]
  }),
  computed: {
    computedScore () {
      if (this.selectValue === null) {
        return ''
      }
      return this.selectValue >= 3 ? '만족' : '불만족'
    }
  },
  methods: {
    confirmBtn(value) {
      this.confirmValue = value
    }
  }
}
</script>

<style scoped>
.titleSpan{
  @apply w-full text-center pt-[20px]
}
.boardList {
  @apply w-full p-[30px];
}
.more{
  @apply w-full text-center;
}
</style>