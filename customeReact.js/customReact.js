// function customRender(reactElement, container) {
    
//     const domElement = documen.createElement(reactElement.
//         type)
//         domElement.innerHTML = reactElement.children
//         for (const prop in reactElement.props) {
//             if (prop === 'children') continue
//            domElement.setAttribute(prop, reactElement.props[prop])
//         }
//         container.appendChild(domElement)
        
// }   


// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },

//     children: 'click me to visit gooogle'
// }

// const customRender = document.getElementById('#root')
// customRender(reactElement, mainContainer)


function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit Google'
};

const customContainer = document.getElementById('root');
customRender(reactElement, customContainer);
