let testscore=[90,80,80,60,50];
let average=0;
for(let i=0;i<testscore.length;i++){
    average=testscore[i]+average;}

average=average/testscore.length;
console.log("Average score is: "+average);