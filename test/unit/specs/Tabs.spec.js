import Vue from 'vue'
import TabView from '@/components/Tabs'
import { Tabs } from '@/game/data/tabs'

describe('Tabs.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TabView)
    const vm = new Constructor({propsData: {tabs: Tabs , currentView:'shop'}}).$mount()

    expect(vm.$el.querySelector('.story').textContent)
        .to.equal('Story')

    console.log(vm.$el.querySelector('.story').classList)

    const active = vm.$el.querySelector('.story').classList.contains('active')

    expect(active).to.equal(false)

  })

  it('currentView should add active', () => {
    const Constructor = Vue.extend(TabView)
    const vm = new Constructor({propsData: {tabs: Tabs , currentView:'story'}}).$mount()

    expect(vm.$el.querySelector('.story').textContent)
        .to.equal('Story')

    const active = vm.$el.querySelector('.story').classList.contains('active')

    expect(active).to.equal(true)

  })

  it('visible should show tab', () => {
    var tabs = Tabs

    tabs.shop.visible = true

    const Constructor = Vue.extend(TabView)
    const vm = new Constructor({propsData: {tabs: tabs , currentView:'story'}}).$mount()

    expect(vm.$el.querySelector('.shop').textContent)
        .to.equal('Shop')

    const active = vm.$el.querySelector('.story').classList.contains('active')

    expect(active).to.equal(true)

  })
})