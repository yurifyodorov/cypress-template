import {GoogleSearchPage} from "../../pages/google-search/google-search.page";

const googleSearch = new GoogleSearchPage()

describe('google search', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('enter query', () => {
        const searchField = googleSearch.search;
        searchField.enterQuery('купить квартиру')
    })
})