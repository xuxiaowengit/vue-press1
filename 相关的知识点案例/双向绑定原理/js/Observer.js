//观察者 - 订阅者

class Observer{
    constructor(dom){
        this.dom = dom;
    }
    //当收到发布者的信息之后，需要执行的动作
    update(content){
        console.log(content);
        this.dom.innerHTML = content;
    }
}