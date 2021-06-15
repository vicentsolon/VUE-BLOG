<template>
    <ul class="contact-container">
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="github" />
                </div>
                <span>vicentsolon</span>
            </a>
        </li>
        <li>
            <a href="mailto:603413691@qq.com">
                <div class="icon">
                    <Icon type="mail" />
                </div>
                <span>603413691@qq.com</span>
            </a>
        </li>
        <li>
            <a
                href="tencent://message/?Menu=yes&uin=352261920&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
            >
                <div class="icon">
                    <Icon type="qq" />
                </div>
                <span>603413691</span>
            </a>
            <div class="pop">
                <img
                    src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
                    alt=""
                />
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon weixin">
                    <Icon type="weixin" />
                </div>
                <span>Shixufoo</span>
            </a>
            <div class="pop">
                <img
                    src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
                    alt=""
                />
            </div>
        </li>
    </ul>
</template>

<script>
    import Icon from "@/components/Icon";
    export default {
        components: {
            Icon,
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    @import "~@/styles/mixin.less";
    .contact-container {
        list-style: none;
        color: @gray;
        padding: 20px;
        li {
            height: 30px;
            line-height: 30px;
            margin: 14px 0;
            position: relative;
            &:hover {
                .pop {
                    transform: scaleY(1);
                }
            }
        }
        a {
            display: flex;
            align-content: center;
            font-size: 14px;
            cursor: pointer;
        }
        .icon {
            font-size: 26px;
            width: 36px;
            &.weixin {
                font-size: 32px;
                text-indent: -3px;
            }
        }
        .pop {
            position: absolute;
            left: 0;
            bottom: 35px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;
            padding: 15px;
            background: #fff;
            border-radius: 8px;
            img {
                width: 150px;
                height: 150px;
                display: block;
            }
            &::after {
                content: "";
                position: absolute;
                width: 8px;
                height: 8px;
                background: #fff;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                bottom: -4px;
            }
        }
    }
</style>
