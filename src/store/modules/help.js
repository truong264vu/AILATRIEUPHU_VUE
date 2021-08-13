// import questionModules from './question'
const helpQuestion = {
    
    mutations: {
            
        COUNT_UP(state)  {
                state.count = state.count + 1;
        },
        COUNT_DOWN(state)  {
            state.count = state.count - 1;
            
        },           
        HELP_100(state) {
            
            if(state.questions[state.count].correct == 0){
                state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                    return index[0] == state.questions[state.count].help })
                    console.log((state.questions[state.count].answer).splice(1,0,'','',''))
                                 
            }              
            else if(state.questions[state.count].correct == 1){
                    state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                        return index[0] == state.questions[state.count].help })
                        console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                                && (state.questions[state.count].answer).splice(2 ,0,'',''))
                     }
            else if(state.questions[state.count].correct == 2) {
                       state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                            return index[0] == state.questions[state.count].help })
                                console.log((state.questions[state.count].answer).splice(0 ,0,'','') 
                                && (state.questions[state.count].answer).splice(3 ,0,''))
                            }
            else {
                state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                    return index[0] == state.questions[state.count].help })
                        console.log((state.questions[state.count].answer).splice(0 ,0,'','','') )
            }
            
          },
        HELP_50(state,RanDom,addAnswer) {
            addAnswer = state.questions[state.count].answer.filter( (index)  => {
                return index[0] !== state.questions[state.count].help })
                console.log(addAnswer)
            RanDom =  Math.floor(Math.random() * 3)
            //cau1
            if(state.questions[state.count].correct == 0){
                state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                    return index[0] == state.questions[state.count].help })
                    if(RanDom == 0) {
                        console.log((state.questions[state.count].answer).splice(1,0,addAnswer[0],'','') && (RanDom)) //phai goi de khai bao RanDom
                    }
                    else if(RanDom == 1) {
                        console.log((state.questions[state.count].answer).splice(1,0,'',addAnswer[1],'') && (RanDom)) 
                    }
                    else if(RanDom == 2) {
                        console.log((state.questions[state.count].answer).splice(1,0,'','',addAnswer[2]) && (RanDom)) 
                    }
                    
                     
                    
            }   
            //cau2
            else if(state.questions[state.count].correct == 1){
                state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                    return index[0] == state.questions[state.count].help })
                        if(RanDom == 0) {
                            console.log((state.questions[state.count].answer).splice(0 ,0,addAnswer[0]) 
                            && (state.questions[state.count].answer).splice(2 ,0,'','') && (RanDom))
                        }
                        else if(RanDom == 1) {
                            console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                            && (state.questions[state.count].answer).splice(2 ,0,addAnswer[1],'') && (RanDom)) 
                        }
                        else if(RanDom == 2) {
                            console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                            && (state.questions[state.count].answer).splice(2 ,0,'',addAnswer[2]) && (RanDom))
                        }
                 }
                 //cau3
            else if(state.questions[state.count].correct == 2) {
                   state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                        return index[0] == state.questions[state.count].help })
                        if(RanDom == 0) {
                            console.log((state.questions[state.count].answer).splice(0 ,0,addAnswer[0],'') 
                            && (state.questions[state.count].answer).splice(3 ,0,'') && (RanDom))
                        }
                        else if(RanDom == 1) {
                            console.log((state.questions[state.count].answer).splice(0 ,0,'',addAnswer[1]) 
                            && (state.questions[state.count].answer).splice(3 ,0,'') && (RanDom))
                        }
                        else if(RanDom == 2) {
                            console.log((state.questions[state.count].answer).splice(0 ,0,'','') 
                            && (state.questions[state.count].answer).splice(3 ,0,addAnswer[2]) && (RanDom))
                        }
                    }
            else {
            state.questions[state.count].answer  = state.questions[state.count].answer.filter( (index)  => {
                return index[0] == state.questions[state.count].help })
                if(RanDom == 0) {
                    console.log((state.questions[state.count].answer).splice(0 ,0,addAnswer[0],'','') )
                }
                else if(RanDom == 1) {
                    console.log((state.questions[state.count].answer).splice(0 ,0,'',addAnswer[1],'') )
                }
                else if(RanDom == 2) {
                    console.log((state.questions[state.count].answer).splice(0 ,0,'','',addAnswer[2]) )
                }

        }
        
          },
        
        STOP_GAME(total) {
            alert('tong diem cua ban la' + total)
            setTimeout(function(){ location.reload(); }, 3000);
        }
}

}

export default helpQuestion;