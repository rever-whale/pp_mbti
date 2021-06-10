<template>
  <div>
    시작 페이지
    <button @click="onClick">
      시작
    </button>
  </div>
</template>


<script>
import {useCompotableRoute} from '@/use/useCompotableRoute';

export default {
  setup() {
    const {pushLoading} = useCompotableRoute();

    return {
      onClick: pushLoading
    }
  },
}
</script>
