<!--我的页面-->
<template>
    <div class="store-mine">
        <div class="div1 comm"><cube-index-list-item v-for="(component, index) in items" :key="index" :item="component">
            <div class="cube-item border-bottom-1px" >
                <router-link class="link" :to="component.path">{{component.text}}
                    <i class="cubeic-arrow"></i>
                </router-link>
            </div>
        </cube-index-list-item></div>
        <div class="div2 comm"><cube-index-list-item v-for="(component, index) in items" :key="index" :item="component">
            <div class="cube-item border-bottom-1px" >
                <router-link class="link" :to="component.path">{{component.text}}
                    <i class="cubeic-arrow"></i>
                </router-link>
            </div>
        </cube-index-list-item></div>
        <div class="div3 comm"><cube-index-list-item v-for="(component, index) in items" :key="index" :item="component">
            <div class="cube-item border-bottom-1px" >
                <router-link class="link" :to="component.path">{{component.text}}
                    <i class="cubeic-arrow"></i>
                </router-link>
            </div>
        </cube-index-list-item></div>
        <div class="div4 comm"><cube-index-list-item v-for="(component, index) in items" :key="index" :item="component">
            <div class="cube-item border-bottom-1px" >
                <router-link class="link" :to="component.path">{{component.text}}
                    <i class="cubeic-arrow"></i>
                </router-link>
            </div>
        </cube-index-list-item></div>
        <nav-bar></nav-bar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { storeHomeMixin } from '../../utils/mixin'
    import NavBar from '../../components/common/NavBar'

    export default {
        mixins: [storeHomeMixin],
        components: {
            NavBar
        },
        created() {
            let openid = this.$cookies.get('openid')
            this.openid = openid
        },
        data () {
            return {
                userInfo: null,
                userAvatar: '',
                userNickName: '',
                id: '',
                balance: '',
                colorFontBlue: true,
                isSelected: false,
                openid: '',
                items: [
                    {
                        path: '/button',
                        text: '签到送书币'
                    },
                    {
                        path: '/store/charge',
                        text: '书币充值'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .store-mine {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        font-size: px2rem(18);
        flex: 1;
        background-color: #333333;
        .comm{
            width: 100%;
            height: 10%;
            background-color: white;
        }
        .div1{
            .cube-item, border-bottom-1px{
                height: 40px;
                line-height: 40px;
                padding-left: 16px;
                .link{
                    display: block;
                    position: relative;
                    width: 100%;
                    color: #333;
                    text-decoration: none;
                    outline: 0;
                    .cubeic-arrow{
                        position: absolute;
                        right: 0;
                        padding: 0 5px;
                        color: #ccc;
                    }
                }
            }
        }
        .div2{
            .cube-item, border-bottom-1px{
                height: 40px;
                line-height: 40px;
                padding-left: 16px;
                .link{
                    display: block;
                    position: relative;
                    width: 100%;
                    color: #333;
                    text-decoration: none;
                    outline: 0;
                    .cubeic-arrow{
                        position: absolute;
                        right: 0;
                        padding: 0 5px;
                        color: #ccc;
                    }
                }
            }
        }
        .div3{
            .cube-item, border-bottom-1px{
                height: 40px;
                line-height: 40px;
                padding-left: 16px;
                .link{
                    display: block;
                    position: relative;
                    width: 100%;
                    color: #333;
                    text-decoration: none;
                    outline: 0;
                    .cubeic-arrow{
                        position: absolute;
                        right: 0;
                        padding: 0 5px;
                        color: #ccc;
                    }
                }
            }
        }
        .div4{
            .cube-item, border-bottom-1px{
                height: 40px;
                line-height: 40px;
                padding-left: 16px;
                .link{
                    display: block;
                    position: relative;
                    width: 100%;
                    color: #333;
                    text-decoration: none;
                    outline: 0;
                    .cubeic-arrow{
                        position: absolute;
                        right: 0;
                        padding: 0 5px;
                        color: #ccc;
                    }
                }
            }
        }

    }
</style>
