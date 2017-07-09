<template>
  <div class="cartcontrol">
    <!--外层动画-->
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0"
           @click="decreaseCart">
        <!--内层动画-->
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {
//      console.log(this.food);
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
//        console.log('clck');
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1); // 这种方式添加的属性可以被监测到
//          this.food.count = 1;
        } else {
          this.food.count++;
        }
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease　// 外层动画原始状态
      display: inline-block
      padding: 6px // 增加点击区域
      opacity: 1
      transform: translate3D(0, 0, 0) // 硬件加速,让动画更流畅
      transition: all 0.4s linear
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0,160,220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave
        opacity: 0
        transform: translate3D(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147,153,159)
    .cart-add
      display: inline-block
      padding: 6px // 增加点击区域
      line-height: 24px
      font-size: 24px
      color: rgb(0,160,220)
</style>
