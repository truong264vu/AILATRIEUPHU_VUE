import swal from 'sweetalert'
export default {
    COUNT_UP(state)  {
        state.count = state.count + 1;
    },
    COUNT_DOWN(state)  {
        state.count = state.count - 1;
        
    },           
    HELP_100(state) {
    
    if(state.questions[state.count].correct == 0){
        state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
            return answerIndex[0] == state.questions[state.count].help })
            console.log((state.questions[state.count].answer).splice(1,0,'','',''))
                         
    }              
    else if(state.questions[state.count].correct == 1){
            state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                return answerIndex[0] == state.questions[state.count].help })
                console.log((state.questions[state.count].answer).splice(0 ,0,'') 
                        && (state.questions[state.count].answer).splice(2 ,0,'',''))
             }
    else if(state.questions[state.count].correct == 2) {
               state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                    return answerIndex[0] == state.questions[state.count].help })
                        console.log((state.questions[state.count].answer).splice(0 ,0,'','') 
                        && (state.questions[state.count].answer).splice(3 ,0,''))
                    }
    else {
        state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
            return answerIndex[0] == state.questions[state.count].help })
                console.log((state.questions[state.count].answer).splice(0 ,0,'','','') )
    }
    
  },
    HELP_50(state,RanDom,addAnswer) {
        addAnswer = state.questions[state.count].answer.filter( (answerIndex)  => {
            return answerIndex[0] !== state.questions[state.count].help })
        console.log(addAnswer)
    RanDom =  Math.floor(Math.random() * 3)
    //cau1
    //lay ra dap an sai => lay ra chu so dau tien cua dap an , sap xep dap an vao tung o cho dung vi tri khi bi hien len .
    // RanDom dung de check vi tri va sap xep no dung vi tri
    if(state.questions[state.count].correct == 0){
        state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
            return answerIndex[0] == state.questions[state.count].help })
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
        state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
            return answerIndex[0] == state.questions[state.count].help })
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
           state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
                return answerIndex[0] == state.questions[state.count].help })
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
    state.questions[state.count].answer  = state.questions[state.count].answer.filter( (answerIndex)  => {
        return answerIndex[0] == state.questions[state.count].help })
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


STOP_GAME(state) {
    state.totalPoint
    swal({
        title:"Bạn sẽ ra về với số tiền là $" + state.totalPoint ,
        confirmButtonColor: '#8CD4F5',
         
     },
        )
    setTimeout(() => {  
    location.reload()
    }, 5000);
},
    START_TIME (state) {
        // bat dau chay thoi gian , chuyen cau hoi 
        document.getElementById('TrueAsw').style.display= 'none' ;//questions.vue
        state.dataTimeInterval = setInterval(() => {
        state.questions[state.count].timeAnswer--;
        if(state.questions[state.count].timeAnswer <= 0){
            location.reload()
            swal('Hết thời gian')         
        }
        if( state.questions[state.count].timeAnswer < 10 ) 
        state.questions[state.count].timeAnswer
        = '0' + state.questions[state.count].timeAnswer;
        return state.dataTimeInterval;
        
    }, 1000)
},
    //dung thoi gian
    STOP_TIME (state) {
    clearInterval(state.dataTimeInterval)
    },

    
}