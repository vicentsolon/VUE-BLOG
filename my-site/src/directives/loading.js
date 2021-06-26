import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 判断是否存在有loading属性的img
function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]");
}

function createLoadingImage() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

export default function (el, buliding) {
    const isExistIamge = getLoadingImage(el);
    if (buliding.value) {
        if (!isExistIamge) {
            const img = createLoadingImage();
            el.appendChild(img);
        }
    } else {
        if (isExistIamge) {
            isExistIamge.remove();
        }
    }
}