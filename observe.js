/**
 * 观察对象的属性是否变化，变化的话callback
 */
class Observe {
    constructor(obj, callback) {
        //检测obj，可以使用属性检查器之类的，避免传
        this.callback = callback;
        this.watch(obj)
    }
    watch(obj) {
        //遍历对象的属性
        Object.keys(obj).forEach((key, index, arr) => {
            let val = obj[key]
            Object.defineProperty(obj, key, {
                set: (newValue) => {
                    //修改/添加属性时触发
                    console.log('setter')
                    this.callback(val,newValue)
                    return val = newValue;
                },
                get: () => {
                    return val
                }
            })

            //如果val是对象， 则继续递归，继续检测
            if(Object.prototype.toString.call(obj[key]) === '[object Object]'){
                this.watch(val);
            }
        })     
    }
}