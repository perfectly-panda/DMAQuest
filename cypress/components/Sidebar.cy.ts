/*tslint: disable: no-reference-*/

import Sidebar from '@/components/Sidebar.vue'


describe('Sidebar', () => {
  it('renders', () => {
    const tabs = ['home', 'about']
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Sidebar, {props:
      {currentTab: 'home', tabs
    }})

    cy.get('nav').should('exist')
    cy.get('.tab').should('have.length', 2)
    cy.get('.active').should('have.text', 'home')
    cy.get('.active').should('have.css', 'background-color')
      .and('match', /rgb\(217, 217, 217\)/)
  })

  it('changes tab', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    const tabs = ['home', 'about']
    cy.mount(Sidebar, {props:
      {currentTab: 'home', tabs,
      onTabChange: onChangeSpy
    }})

    cy.get('.tab').contains('about').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', "about")
  })
})