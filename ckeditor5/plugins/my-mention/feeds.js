import requestSomething from "../../shared/functions";

const apiCall = (input) => {
    return new Promise( async (resolve, reject) => {
        const url = 'http://localhost:3000/suggestDoc?input=' + input;
        const response = await requestSomething(url);
        resolve(response) ;
    });
}

const customItemRenderer = (item) => {
    // const { suggestionHtml, docId, suggestionId } = item;
    // const itemElement = document.createElement('span');
    // itemElement.classList.add('evers-suggestion');
    // itemElement.id = suggestionId;
    // itemElement.innerHTML = suggestionHtml;
    // return itemElement;
    const itemElement = document.createElement( 'span' );

    itemElement.classList.add( 'custom-item' );
    itemElement.id = `mention-list-item-id-${ item.userId }`;
    itemElement.textContent = `${ item.name } `;

    const usernameElement = document.createElement( 'span' );

    usernameElement.classList.add( 'custom-item-username' );
    usernameElement.textContent = item.id;

    itemElement.appendChild( usernameElement );

    return itemElement;
}

const feeds = [
    {
        marker: '@',
        feed: apiCall,
        minimumCharacters: 1,
        itemRenderer: customItemRenderer
    }
]

export default feeds;