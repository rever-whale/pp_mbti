let state = [];
export function useAnswer () {
  function setAnswer (index, answer) {
    if (state[index] !== undefined) {
      state[index] = answer;
    } else {
      state.push(answer);
    }
  }

  function getAnswer () {
    return state;
  }

  function reset () {
    state = [];
  }

  return {
    setAnswer,
    getAnswer,
    reset
  }
}
