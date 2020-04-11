//观察目标 - 发布者

class Subject{
    constructor(){
        //准备一个存储订阅者信息的数组
        this.observers = [];
    }
    //订阅方法（登记）
    subscribe(observer){
        this.observers.push(observer);
    }
    //取消订阅（取消登记）
    unsubscribe(){

    }
    //发布消息
    publish(content){
        // console.log(this.observers);
        //对所有的订阅者 挨个进行通知即可，其实就是调用对应的方法。
        this.observers.forEach((observer)=>{
            observer.update(content);
        })
    }
}