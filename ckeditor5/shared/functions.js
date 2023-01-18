export const requestSomething = async (url) => {
    console.log('requestSomething!', url);
    return new Promise((resolve, reject) => {
        return fetch(url)
            .then((response) => {
                resolve(response.json())
            })
            .catch((error) => {
                console.log({ error });
                reject(error)
            })
    });
}

export const viewToPlainText = (viewItem) => {
    let text = '';

    if (viewItem.is('$text') || viewItem.is('$textProxy')) {
        // If item is `Text` or `TextProxy` simple take its text data.
        text = viewItem.data;
    } else if (viewItem.is('element', 'img') && viewItem.hasAttribute('alt')) {
        // Special case for images - use alt attribute if it is provided.
        text = viewItem.getAttribute('alt');
    } else if (viewItem.is('element', 'br')) {
        // A soft break should be converted into a single line break (#8045).
        text = '\n';
    } else {
        // Other elements are document fragments, attribute elements or container elements.
        // They don't have their own text value, so convert their children.
        let prev = null;

        for (const child of viewItem.getChildren()) {
            const childText = viewToPlainText(child);

            // Separate container element children with one or more new-line characters.
            if (prev && (prev.is('containerElement') || child.is('containerElement'))) {
                if (smallPaddingElements.includes(prev.name) || smallPaddingElements.includes(child.name)) {
                    text += '\n';
                } else {
                    text += '\n\n';
                }
            }

            text += childText;
            prev = child;
        }
    }

    return text;
}

export default { requestSomething, viewToPlainText };