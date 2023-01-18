import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SuggestionsEditing from './suggestionsediting';
import SuggestionsUI from './suggestionsui';

export default class LinkSuggestions extends Plugin {
    static get requires() {
        return [ SuggestionsEditing, SuggestionsUI ];
    }
}