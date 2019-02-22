<template>
    <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler">
    </cube-tab-bar>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'NavBar',
        data () {
            return {
                selectedLabelDefault: this.$t('book.store'),
                tabs: [{
                    label: this.$t('book.shelf'),
                    icon: 'cubeic-like'
                }, {
                    label: this.$t('book.store'),
                    icon: 'cubeic-home'
                }, {
                    label: this.$t('book.charge'),
                    icon: 'cubeic-vip'
                 }, {
                    label: this.$t('book.mine'),
                    icon: 'cubeic-person'
                 }]
            }
        },
        methods: {
            clickHandler (label) {
                if (label === this.$t('book.store')) {
                    this.$router.push('/store/home')
                }
                if (label === this.$t('book.shelf')) {
                    this.$router.push('/store/shelf')
                }
                if (label === this.$t('book.charge')) {
                    this.$router.push('/store/charge')
                }
                if (label === this.$t('book.mine')) {
                    this.$router.push('/store/mine')
                }
            },
            changeHandler (label) {
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";
</style>
