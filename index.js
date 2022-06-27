        //number 1
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0){
            console.log ("fizz"); 

        }
        else if(i % 5 === 0){
            console.log("buzz");

        }
        else if(i % 3 === 0 && i % 5 === 0)
        console.log("fizBuzz");

        else
        console.log(i);
    }  

    //number 2
    let sum = 0;
    for(let i = 0; i < 1000; i++){
        if(i % 3=== 0 || i % 5 === 0)
        sum += i;
    }
    console.log(sum);

    // Number 3
    for(let i = 0;i <= 20; i++){
      if(i % 2 === 0)
        console.log("num is even")
      else if(i % 2 !== 0)
      console.log("num is odd")
    }

    //Number 4
    let arr = [-2,4,-5,6,0]
       let max = 0;
    for(let i = 0;i < arr.length; i++){
       if(arr[i] > max){
        max = arr[i];  
       }
    }
    console.log(max);
   

    //Number 5
    let num1 = 10;
    let num2 = 40;
    switch(num1,num2){
        case num1:
            console.log("{num1}is greater that num2")
            break

                default:
                    console.log("{num2} i greater that num1")

    }

     //numer 6
    for(let year = 2000;year < 2022; year++){ 
        if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0))
        console.log(year);
    //    else
    //    console.log (false);
    } 
     
  
       

  

     


    

