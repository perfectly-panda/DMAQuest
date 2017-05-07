import Vue from 'vue'
import Game from '@/components/Game'

describe('Game.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Game)
    const vm = new Constructor().$mount()

    var running = vm.game.isRunning()

      expect(running).to.deep.equal(true)
      expect(vm.message).to.equal('Loading...')
      expect(vm.currentView).to.equal('story')
  })
})