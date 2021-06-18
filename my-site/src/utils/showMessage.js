import styles from "./message.module.less";
import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    // 创造消息盒子
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type
    });
    const typeClassName = styles[`message-${type}`]
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    div.className = `${styles.message} ${typeClassName}`;
    // 判断容器position是否改变
    if (getComputedStyle(container).position == "static") {
        container.style.position = "relative";
    }
    container.appendChild(div);

    // 触发重绘
    div.clientHeight;

    // 回到中心位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    // 延迟消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-20px)`;
        div.addEventListener("transitionend", () => {
            div.remove();
            //运行回调函数
            options.callback && options.callback();
            container.style.position = null;
        }, {
            once: true
        });
    }, duration);
}