const React = require("react");

class Article extends React.Component{
    render(){
        return (
            <article>
                <h2>{this.props.article.name}</h2>
                <h3>{this.props.article.description}</h3>
                <div>
                    <p>{this.props.article.author}</p>
                    <p>{this.props.article.date}</p>
                </div>
            </article>
        )
    }
}

class ArticlesList extends React.Component{
    render(){
        return (
            <div>
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