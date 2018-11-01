const React = require("react");
const ReactDom = require("react-dom");

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
                {this.props.articles.map(function(article, key){
                    return <Article key={key} article={article}/>
                })}
            </div>
        )
    }
}

function articleList(){

    function render(articles){
        ReactDom.render(
            <ArticlesList articles={articles}/>,
            document.getElementById('app'))
    }

    return {
        render: render
    }
}

module.exports = articleList;