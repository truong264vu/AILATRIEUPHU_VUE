export default {
    TOTAL(state) { 
        if(state.questions[state.count].choose == state.questions[state.count].correct){
                setTimeout(() => {
                  state.totalPoint = state.questions[state.count].point 
                   return state.totalPoint ;
                }, 3000);}
},
}