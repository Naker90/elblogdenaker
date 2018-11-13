const React = require("react");

class Article extends React.Component{
    render(){
        return (
            <article>
                <h2 className="article-title">{this.props.article.name}</h2>
                <h3 className="article-description">{this.props.article.description}</h3>
                <h4 className="article-info">Publicado por {this.props.article.author} el dia {this.props.article.date}</h4>
            </article>
        )
    }
}

class HomeView extends React.Component{
    render(){
        return (
            this.props.articles.map((article, key) => {
                return <Article key={key} article={article}/>
            })
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