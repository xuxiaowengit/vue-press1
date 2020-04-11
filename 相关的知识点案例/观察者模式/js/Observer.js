//观察者 - 订阅者

class Observer{
    constructor(name){
        this.name = name;
    }
    //当收到发布者的信息之后，需要执行的动作
    action(){
        console.log(this.name,': 各种凑钱，奔向售楼部！');
    }
}