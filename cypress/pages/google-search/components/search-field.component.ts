// SELECTORS
const SEARCH_FIELD = "input[type=text]";

export class SearchFieldComponent {
    public async enterQuery(query: string): Promise<void> {
        cy.get(SEARCH_FIELD)
            .type(query)
            .type('{enter}')
        cy.wait(3000)
    }
}