console.log('App.js is running!');

const app = {
    title: "Indecision-App",
    subtitle: "save time, I'll choose for you!",
    options: []
};


// JSX - Javascript XML
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        appRender();
    }
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const removeAll = () => {
    app.options = [];
    appRender();
};

const appRoot = document.getElementById('app');
const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No Options" }</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>REMOVE ALL</button>
            <ol>
                {
                    app.options.map((val, index) => {
                        return <li key={index}>{val}</li>
                    })
                }  
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    
    ReactDOM.render(template, appRoot);
}



appRender();