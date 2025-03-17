let num=1
//recursion
let show= ()=>

    {
        console.log("hii",num);
        num++;
        if (num<=10){
            show();
        }
    } 
    show()

    