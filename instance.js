
class SingletonApple {
  constructor(name) {
    //首次使用构造器实例
    if (!SingletonApple.instance) {
      this.name = name;
      //将this挂载到SingletonApple这个类的instance属性上
      SingletonApple.instance = this;
    }
    return SingletonApple.instance;
  }
  static getInstance(name){
    if(!SingletonApple.instance){
      return new SingletonApple(name)
    }else{
      return SingletonApple.instance
    }
  }
  static destroyInstance(){
    if(SingletonApple.instance){
      SingletonApple.instance=null
      return 'success'
    }
  }
}

let p = new SingletonApple('wr')
let p2 = new SingletonApple('wr2')
let p3 = SingletonApple.getIns('wr3')
console.log(p)
console.log(p2)
console.log(p3)
console.log(p==p2,p2==p3)