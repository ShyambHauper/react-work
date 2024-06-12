{/* <div id="parent">
    <div id="chlid">
        <h1>I'm Shyam!</h1>
        <h2>I'm Shyam!</h2>
    </div>
    <div id="chlid_new">
        <h1>I'm Shyam!</h1>
        <h2>I'm Shyam!</h2>
    </div>
</div> */}

// ReactElement(Object) => HTML(Browser understand)

// const heading = React.createElement("h1", { id: 'heading' }, "Hello, I am shyam!")

// console.log(heading, 'heading --> object')

const heading = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, "I'm Shyam!"), React.createElement('h2', {}, "I'm Shyam!")]), React.createElement('div', { id: 'child_new' }, [React.createElement('h1', {}, "I'm Shyam!"), React.createElement('h2', {}, "I'm Shyam!")])])

console.log(heading, 'heading --> object')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)