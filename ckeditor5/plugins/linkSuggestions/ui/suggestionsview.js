import { ListView } from 'ckeditor5/src/ui';
import { Rect } from 'ckeditor5/src/utils';

import './suggestionsui.css';

export default class SuggestionsView extends ListView {
    constructor(locale) {
        super(locale);
        this.extendTemplate({
            attributes: {
                class: [
                    'evers-suggestions'
                ],
                tabindex: '-1'
            }
        })
    }

    selectFirst() {
        this.select(0);
    }

    selectNext() {
        const item = this.selected;
        const index = this.items.getIndex(item);
        this.select(index + 1);
    }

    selectPrevious() {
        const item = this.selected;
        const index = this.items.getIndex(item);
        this.select(index - 1);
    }
    select(index) {
        let indexToGet = 0;

        if (index > 0 && index < this.items.length) {
            indexToGet = index;
        } else if (index < 0) {
            indexToGet = this.items.length - 1;
        }

        const item = this.items.get(indexToGet);

        if (this.selected === item) {
            return;
        }

        if (this.selected) {
            this.selected.removeHighlight();
        }

        item.highlight();
        this.selected = item;

        if (!this._isItemVisibleInScrolledArea(item)) {
            this.element.scrollTop = item.element.offsetTop;
        }
    }

    executeSelected() {
        this.selected.fire('execute');
    }

    _isItemVisibleInScrolledArea(item) {
        return new Rect(this.element).contains(new Rect(item.element));
    }

}