import {useRoute, useRouter} from 'vue-router';
import {Home, Loading, Intro, Question, Result} from '@/constants/router';

export function useCompotableRoute () {
  const router = useRouter();
  const route = useRoute();

  function pushWithQuery(name, query) {
    router.push({
      name,
      query: {
        ...route.query,
        ...query
      },
    })
  }

 return {
   pushHome: (query) => pushWithQuery(Home, query),
   pushLoading: (query) => pushWithQuery(Loading, query),
   pushIntro: (query) => pushWithQuery(Intro, query),
   pushQuestion: (query) => pushWithQuery(Question, query),
   pushResult: (query) => pushWithQuery(Result, query),
 }
}
