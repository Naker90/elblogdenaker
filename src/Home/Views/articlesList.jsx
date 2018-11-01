const React = require("react");

class Article extends React.Component{
    render(){
        return (
            <article>
                <h2 className="article-title">{this.props.article.name}</h2>
                <h3 className="article-description">{this.props.article.description}</h3>
                <div className="article-info">
                    <p>Publicado por {this.props.article.author} el dia {this.props.article.date}</p>
                </div>
            </article>
        )
    }
}

class ArticlesList extends React.Component{
    render(){
        return (
            <div className="articles-container">
                {this.props.articles.map((article, key) => {
                    return <Article key={key} article={article}/>
                })}
            </div>
        )
    }
}

function articleList(navigator){

    function render(articles){
        navigator.reactRender(<ArticlesList articles={articles}/>);
    }

    return {
        render: render
    }
}

module.exports = articleList;