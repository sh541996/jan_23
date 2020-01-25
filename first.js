function fun() {
    var x = 100;
    if (true) {
        var y = 200;
        console.log('x diclierd Globally : ' + x);
        console.log('y diclierd inside if block : ' + y);
    }
    console.log('x diclierd Globally : ' + x);
    console.log('y diclierd inside if block : ' + y);
}
fun();
