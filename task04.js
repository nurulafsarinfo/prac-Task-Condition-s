// let score = 0;
// let frndScore = 0;

// if(score > 80){
//     if(frndScore > 80){
//         console.log("Go for lunch")
//     }
//     else if(frndScore < 80 && frndScore >= 60){
//         console.log("Good luck next time!")
//     }
//     else if(frndScore < 60 && frndScore >= 40){
//         console.log("Keep your friend's mssg Unseen!")
//     }
//     else{
//         console.log("Block your friend")
//     }
// }
// else{
//     console.log("Go to home and Sleep and act sad!")
// }

// shorthand if-else
let score = 39;
let frndScore = 30;

score > 80 
    ? console.log("Go for lunch") 
        : frndScore < 80 && frndScore >= 60 
            ? console.log("Good luck next time!") 
            : frndScore < 60 && frndScore >= 40 
                ? console.log("mssg unseen") 
                : frndScore < 40 
                    ? console.log("Block frnd") 
    : console.log("Sleep and act sad!")
