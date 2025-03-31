function customRender (reactElement,container){//reactElement is the element and container is where the reactElement would be injected 
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    // //Now we need to set attribute
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // //Now we need to inject the domElement in the container
    // container.appendChild(domElement)
    for(const prop in reactElement.props){
        if(prop==reactElement.children) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const mainContainer= document.querySelector('#root')
//Now we need to render this  mainContainer
// To render this we need a function which returns html 
// Now how does a react compiles Html tag let's see
const reactElement={
    type:'a',//Type may be div or a or p or any other tag name
    props: {//It is an object which has several properties
        href: 'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}// every element must be written in this way only
// Now to render this we need a method
customRender(reactElement,mainContainer)//For its functioning we need to create a function. Move to line no.1