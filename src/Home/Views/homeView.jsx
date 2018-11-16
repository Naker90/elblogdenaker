const React = require("react");

class Article extends React.Component{
    render(){
        return (
            <article>
                <h2>{this.props.article.name}</h2>
                <p>{this.props.article.description}</p>
                <p>Publicado por {this.props.article.author} el dia {this.props.article.date}</p>
            </article>
        )
    }
}

class HomeView extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.articles.map((article, key) => {
                        return <Article key={key} article={article}/>
                    })
                }
            </div>
        )
    }
}

function homeView(navigator) {

    function render(articles){
        navigator.reactRender(<HomeView articles={articles}/>);
    }

    return {
        render: render
    }
}

module.exports = homeView;