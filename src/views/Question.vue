<template>
  <div>
    <button @click="() => goBack()">뒤로가기</button>
    질문 페이지
    {{ question }}
    <button @click="() => onClick(true)">예</button>
    <button @click="() => onClick(false)">아니오</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCompotableRoute } from "@/use/useCompotableRoute";
import { useAnswer } from "@/use/useAnswer";
import { QUESTION } from "@/constants/question";

export default {
  setup() {
    const {setAnswer} = useAnswer();
    const { pushQuestion, pushResult, goBack } = useCompotableRoute();
    const { params } = useRoute(); 

    const index = computed(() => +params.index);
    const question = computed(() => QUESTION[index.value]);

    function onClick(choice) {
      setAnswer(index.value, choice);
      
      const nextIndex = index.value + 1;
      if (nextIndex < QUESTION.length) {
        pushQuestion(nextIndex);
      } else {
        pushResult();
      }
    }

    return {
      question,
      onClick,
      goBack
    };
  }
};
</script>
