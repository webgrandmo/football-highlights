const field = document.querySelector('.search-input'),
    element = document.querySelectorAll('.match-item'),
    select = document.querySelector('.filter-input'),
    container = document.getElementById('match-container'),
    matchItem = document.querySelector('.match-item');
class SearchInput {
    constructor(searchField, searchElements) {
        this.searchField = searchField;
        this.searchElements = searchElements;
    }

    searchItems() {
        this.searchField.addEventListener('keyup', (e) => {
            e.preventDefault();
            const query = this.searchField.value.toLowerCase();
            const items = document.querySelectorAll('.match-item');
            // loop through all elements to find match
            if (query) {
                Array.from(items).forEach(item => {
                    const title = item.firstElementChild.innerText.toLowerCase();

                    if (title.indexOf(query) == -1 || !query) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            } else {
                // empty query so show everything
                item.style.display = 'block';
            }

        });
    }
}
class SortInput {
    constructor(sortField, sortElements, appendContainer) {
        this.sortField = sortField;
        this.sortElements = sortElements;
        this.appendContainer = appendContainer;
    }

    triggerSortItems() {
        this.sortField.addEventListener('change', () => {
            const items = this.sortElements;
            const selector = document.querySelector('.filter-input');
            const selectValue = selector.options[selector.selectedIndex].getAttribute('name');
            const matchItems = Array.from(items).filter(item => {
                return item.getAttribute('data-name').toLowerCase() === selectValue.toLowerCase()
            });

            matchItems.forEach((item) => {
                this.appendContainer.insertBefore(item, this.appendContainer.firstChild);
            })
        });
    };
}

const searchInput = new SearchInput(field, element);
searchInput.searchItems();
const selectInput = new SortInput(select, element, container);
selectInput.triggerSortItems();