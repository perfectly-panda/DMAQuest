import Sidebar from '@/components/Sidebar.vue'
import { createTestingPinia } from '@pinia/testing'
import { useGameStore } from '../../src/stores/GameStore';

beforeEach(() => {
  const tabs = ['home', 'about']
  const pinia = createTestingPinia({createSpy: ()=>cy.spy()})
  const store = useGameStore(pinia)
  store.tabs.options = tabs
  store.tabs.currentTab = tabs[0]
  // see: https://test-utils.vuejs.org/guide/
  cy.mount(Sidebar, { global: { plugins: [ store ], }, })
})


it('renders', () => {
  cy.get('nav').should('exist')
  cy.get('.tab').should('have.length', 2)
  cy.get('.active').should('have.text', 'home')
  cy.get('.active').should('have.css', 'background-color')
    .and('match', /rgb\(217, 217, 217\)/)
})

it('changes tab', () => {
  cy.get('.tab').contains('about').click()
  cy.get('.active').should('have.text', "about")
})