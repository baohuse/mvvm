//这里的sub是什么呢？
class Deps {
    constructor() {
        this.subs = []
    }
    //订阅
    addSub(sub) {
        this.subs.push(sub)
    }
    //发布
    notify() {
        this.subs.filter(item => typeof item !== 'string').forEach(sub => sub())
    }
}