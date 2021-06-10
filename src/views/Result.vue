<template>
  <div>
    결과 페이지
    {{getAnswer()}}

    <button @click="pushIntro">처음으로</button>
  </div>
</template>

<script>

import { useAnswer } from "@/use/useAnswer";
import { useCompotableRoute } from "@/use/useCompotableRoute";


export default {
  setup() {
    const {pushIntro} = useCompotableRoute();
    const { getAnswer } = useAnswer();

    return {
      getAnswer,
      pushIntro,
    };
  }
};
</script>
