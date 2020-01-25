function fun(){
    var x:number = 100;
    if(true){
    var y:number = 200;
    console.log('x diclierd Globally : '+x);
    console.log('y diclierd inside if block : '+y);
    }
    console.log('x diclierd Globally : '+x);
    console.log('y diclierd inside if block : '+y);
    }
    fun();
  