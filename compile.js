/**
 * 数据绑定视图
 */

class Compile {
    /**
     * @param {HTMLElement} el 要绑定的dom节点
     * @param {Object} data 数据 
     */
    constructor(el = '#app', data = {}){
        this.data = data;
        let ele = document.querySelector(el); //拿到挂载点
        let fragement = document.createDocumentFragment();
        fragement.append(ele); 
        this.replace(fragement); 
        document.body.appendChild(fragement);
    }
    /**
     * 数据渲染到视图, 一层层递归子元素，找到文本元素并且包含 {{}} 的，做替换
     */
    replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;
            if (node.nodeType === 3 && reg.test(txt)) {
                node.textContent = txt.replace(reg, (matched, placeholder) => {
                    return this.data[placeholder]
                })
            }

            if(node.childNodes && node.childNodes.length) {
                this.replace(node);
            }
        })
    }

}