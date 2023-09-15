
const corousel =document.querySelectorAll(".temp");
var counter =0;
console.log(corousel);
corousel.forEach(
    (slides,index)=>{
      slides.style.left=`${index * 100}%`;
    }
)

const prev = ()=>{
    if(counter == 0){
        counter=corousel.length-1;
        corImage();
    }else{
counter--;
corImage();
}
}


const next= ()=>{
    if(counter == corousel.length-1){
        counter=0;
        corImage();
    }else{
counter++;
corImage();
}
}
console.log(next)
const corImage = ()=>{
    corousel.forEach((temp)=>{
temp.style.transform =`translateX(-${counter*100}%)`
    })
}