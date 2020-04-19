const field = document.querySelector('.search-input'),
    element = document.querySelector('.match-item');
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

const searchInput = new SearchInput(field, element);
searchInput.searchItems();