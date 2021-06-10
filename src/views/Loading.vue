<template>
  <div>
    로딩 페이지 {{ count }}
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import {useCompotableRoute} from '@/use/useCompotableRoute';
    
const maxCount = 100;
export default {
  setup () {
    const count = ref(0);
    const {pushIntro} = useCompotableRoute();

    onMounted(() => {
      setInterval(function () {
        if (count.value < maxCount) {
           count.value += 1;
        } else {
          clearTimeout(this);
          pushIntro();
        }
      }, 10);
    });

    return {
      count
    };
  }


}
</script>
