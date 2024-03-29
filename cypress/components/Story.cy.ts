import Story from '@/components/story/Story.vue'
import { createTestingPinia } from '@pinia/testing'
import { useGameStore } from '../../src/stores/GameStore'
import { useResourceStore } from '../../src/stores/ResourceStore'
import { useStoryStore } from '../../src/stores/StoryStore'

it('renders', () => {
  const tabs = ['home', 'about']
  const pinia = createTestingPinia({createSpy: ()=>cy.spy()})
  const gameStore = useGameStore(pinia)
  const resourceStore = useResourceStore(pinia)
  const storyStore = useStoryStore(pinia)
  storyStore.intro = { en: ['Hello World'] }
  
  cy.mount(Story, { global: { plugins: [ gameStore, resourceStore, storyStore ], }, })
    .as('story')
  cy.get('#intro').should('have.text', 'Hello World')
})

it ('renders elements dynamically', () => {
  const tabs = ['home', 'about']
  const pinia = createTestingPinia({createSpy: ()=>cy.spy()})
  const gameStore = useGameStore(pinia)
  const resourceStore = useResourceStore(pinia)
  const storyStore = useStoryStore(pinia)
  storyStore.intro = { en: ['Hello World'] }
  storyStore.waitTime = { en: ['Wait Time', 'foo', 'bar'] }
  gameStore.flags.story.push({ text: 'waitTime', order: 1 })
  cy.mount(Story, { global: { plugins: [ gameStore, resourceStore, storyStore ], }, })
  .as('story')
  cy.get('#waitTime').contains('Wait Time')
})