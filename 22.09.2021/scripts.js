function main(){
    function task1(){
        let x  = document.querySelector(".task1");
        const name = "Мадраимов Роман Валерьевич";
        x.innerHTML= name;
        return name;
    }
    function task2(){
        let x  = document.querySelector(".task2");
        const birthmounth = 01;
        const birthyear = 2002;
        x.innerHTML= birthmounth+ " " + birthyear;
        return x.innerHTML;
    }
    function task3(name,mounth ){
        let x  = document.querySelector(".task3");
        x.innerHTML = "Приветствую, "+ task1() + " <br>Вы родились: "+ task2();
    }
    const start = -15;
    const end = 15;
    function range(start,end){
        let x  = document.querySelector(".task4");
        let arr = new Array();
        for(let i = start;i<=end; i++){
            x.innerHTML += i +" ";
        }   
    }
    function rangeOdd(start,end){
        let x  = document.querySelector(".task5");
        let arr = new Array();
        for(let i = start; i<= end;i++){
            if(i % 2 == 0) x.innerHTML += i;
            else continue;
        }
    }
    function average(a,b){
        let x  = document.querySelector(".task7");
        x.innerHTML = "Среднее арифметическое "+ a +" и " + b + " равно: " + (a+b)/2;
        return (a+b)/2;
    }
    function square(a){
        let x  = document.querySelector(".task8");
        x.innerHTML = "Корень "+ a + " равен: " + Math.sqrt(a);
        return Math.sqrt(a);
    }
    function cube(a){
        let x  = document.querySelector(".task9");
        x.innerHTML = "Разница куба и квадрата аргумента " + a + " равна: " + ((a*a*a) - (a*a));
        return ((a*a*a)-(a*a));
    }
    function minus(){
        let x  = document.querySelector(".task10");
        let arr = new Array();
        for(let i = 1; i<=5;i++){
            arr[i] = average(square(i),cube(i));
            x.innerHTML += " " + Math.floor(arr[i]);
        }
    }
    task1();
    task2();
    task3();
    range(start,end);
    rangeOdd(start,end);
    average(1,5);
    square(25);
    cube(5);
    minus();
}
main();