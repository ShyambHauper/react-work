// const heading = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, "I'm Shyam!"), React.createElement('h2', {}, "I'm React")]), React.createElement('div', { id: 'child_new' }, [React.createElement('h1', {}, "I'm Shyam!"), React.createElement('h2', {}, "I'm Shyam!")])])

// JSX => Bable transpiles it to React.CreateElement = ReactElement-JS Object => HTMLElement(render)

// React Element

// const heading = (<h1 className='parent'>
//     This is react element
// </h1>)
// console.log(heading, 'heading --> object')

//React Component

//Class Based Component - OLD Way
//Function Based Component - NEW Way

// const Title = () => (<h1 className='parent'>
//     This is functional component 1
// </h1>)

// React Functional Component

//Component composition (Put component another component)

//React Element called
// Normal Javascript function called
// Function component called
// Function component called

// const HeadingComponent = () =>
//     (<div id='container'> {heading} {Title()} <Title /> <Title></Title> <h1 className='parent'>This is functional component 2</h1></div>)



// Header
//  - logo
//  - Home / AboutUs / Cart
// Body
//  - Search
//  - Restaurants container
//    - Restaurants card
// Footer
//  - Help
//  - ContactUs