import Vue from 'vue'
import VueAxe from '../../../dist/vue-axe'

const config = {
  rules: [
    { id: 'heading-order', enabled: true },
    { id: 'label-title-only', enabled: true },
    { id: 'link-in-text-block', enabled: true },
    { id: 'region', enabled: true },
    { id: 'skip-link', enabled: true },
    { id: 'help-same-as-label', enabled: true }
  ]
}

describe('Home-VueAxe', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display the main headline', () => {
    cy.get('[data-va="main header"]').should('be.visible')
  })

  it('should assert that page content is correct', () => {
    cy.get('[data-va="main header"]').should('contain', 'Welcome')
  })

  it('should run axe in the context of the document', () => {
    cy.visit('/')
      .then(win => {
        console.log(win.console)
        cy.spy(win.console, 'group')
        cy.spy(win.console, 'groupCollapsed')
        cy.spy(win.console, 'groupEnd')

        VueAxe(Vue, config)
          .then(() => {
            expect(win.console.group).to.be.calledWith('%cNew aXe issues', 'padding:6px;font-size:20px;background-color:#8ba6c5;color:#fff;font-weight:bold;')
            expect(win.console.groupCollapsed).to.be.calledWith('%c%s: %c%s %s')
            expect(win.console.groupEnd).to.be.called
          })
      })
  })
})
