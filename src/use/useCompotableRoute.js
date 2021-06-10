import {useRouter} from 'vue-router';
import {Home, Loading, Intro, Question, Result, RoutePath} from '@/constants/router';

export function useCompotableRoute () {
  const router = useRouter();

  function pushRoute(path) {
    router.push({path})
  }

  function goBack () {
    window.history.go(-1);
  }

 return {
   pushHome: () => pushRoute(RoutePath[Home]),
   pushLoading: () => pushRoute(RoutePath[Loading]),
   pushIntro: () => pushRoute(RoutePath[Intro]),
   pushQuestion: (index) => pushRoute(`${RoutePath[Question]}/${index || 0}`),
   pushResult: () => pushRoute(RoutePath[Result]),
   goBack,
 }
}
