<template>
  <div>
    ㅍㅍ의 세계에 온걸 환영한다. 우민들아.
    <button @click="pushQuestion(0)">테스트 시작</button>
  </div>
</template>

<script>
import {useCompotableRoute} from '@/use/useCompotableRoute';

export default {
  setup() {
    const {pushQuestion} = useCompotableRoute();

    return {
      pushQuestion    
    }
  },
}
</script>
