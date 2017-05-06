import Vue from 'vue'
import Game from '@/components/Game'

describe('Game.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Game)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#game div').textContent)
      .to.equal('Loading...')
    it('has a running game', function() {
        var running = vm.data.game.isRunning()

        expect(running).to.deep.equal(true)
    })
  })
})