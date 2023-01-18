import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class AllowContent extends Plugin {
    init() {
        this.allowSpans();
        this.allowDivs();
    }

    allowSpans() {
        const editor = this.editor;
        const schema = editor.model.schema;
        const conversion = editor.conversion;

        // ALLOW SPANS with class color-red or color-fuchsia
        // <$text eversColor="red">Content...</$text>   <===>   <span class="color-red">Content...</span>
        schema.extend('$text', { allowAttributes: 'eversColor' });
        conversion.attributeToElement({
            model: {
                key: 'eversColor',
                values: ['red', 'fuchsia'],
                name: '$text'
            },
            view: {
                red: {
                    name: 'span',
                    classes: ['color-red']
                },
                fuchsia: {
                    name: 'span',
                    classes: ['color-fuchsia']
                }
            }
        });
    }

    allowDivs() {
        const editor = this.editor;
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        
        // ALLOW DIVS with class evers-leitsatz and id
        // <eversPrinciple id="X">Content...</eversPrinciple>   <===>   <div class="evers-leitsatz" id="X">Content...</div>
        schema.register('eversPrinciple', {
            allowWhere: '$block',
            allowContentOf: '$root'
        });

        conversion.for('upcast').elementToElement({
            view: {
                name: 'div',
                classes: ['evers-leitsatz']
            },
            model: (viewElement, { writer: modelWriter }) => {
                return modelWriter.createElement('eversPrinciple', {
                    id: viewElement.getAttribute('id')
                });
            }
        })

        conversion.for('downcast').elementToElement({
            model: 'eversPrinciple',
            view: (modelElement, { writer: viewWriter }) => {
                return viewWriter.createContainerElement('div', {
                    id: modelElement.getAttribute('id'),
                    class: 'evers-leitsatz'
                });
            }
        })
    }
    
}