import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { TextWatcher } from 'ckeditor5/src/typing';
import { requestSomething } from '../../shared/functions';
import SuggestionsView from './ui/suggestionsview';


const testCallback = (editor) => {
    return (text) => {
        let userInput = null;
        const regex = /(?:^|[\s(\[{"'])([@])([^\s]+)/ig;
        const data = editor.getData();
        const fullText = data.replace(/<[^>]+>/ig, '').replace(/&nbsp;/ig, ' ');
        const allMatches = fullText.match(regex);
        if (!allMatches) { return false; }
        const textMatches = text.match(regex) === null ? [] : text.match(regex);
        const subString = fullText.substring(text.length);
        if (subString.startsWith('@') || text.endsWith('@')) {
            userInput = allMatches[textMatches.length];
        }
        if (textMatches.length > 0) {
            const match = allMatches.find(x => x.startsWith(textMatches.at(-1)));
            const lastTextWord = text.split(' ').at(-1);
            if (lastTextWord.startsWith('@')) { userInput = match }
        }

        if (userInput) {
            return { userInput: userInput.replace(/@/ig, '').trim() }
        }

        return false;
    }
}

export default class SuggestionsUI extends Plugin {
    init() {
        console.log('SuggestionsUI#init() got called');
        const editor = this.editor;
        const schema = editor.model.schema;
        const conversion = editor.conversion;

        const watcher = new TextWatcher(editor.model, testCallback(editor));

        watcher.on('matched', async (evt, data) => {
            const { userInput } = data;
            const url = 'http://localhost:3000/suggestDoc?input=' + userInput;
            const response = await requestSomething(url);
            console.log('response', response);
            const locale = editor.locale;
            const testThing = new SuggestionsView(locale);
            console.log('testThing', testThing);
        })
    }


}