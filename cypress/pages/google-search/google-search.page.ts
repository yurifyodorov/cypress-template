import { SearchFieldComponent } from "./components/search-field.component";

export class GoogleSearchPage {
    public search: SearchFieldComponent;
    public constructor() {
        this.search = new SearchFieldComponent()
    }
}