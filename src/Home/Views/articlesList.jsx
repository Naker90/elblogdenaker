const React = require("react");
const ReactDom = require("react-dom");
const ReactCreateClass = require("create-react-class");

function articleList(){

    const Article = ReactCreateClass({
       render: function(){
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
    });

    const ArticlesList = ReactCreateClass({
       render: function(){
           return (
               <div>
                   {this.props.articles.map(function(article, key){
                       return <Article key={key} article={article}/>
                   })}
               </div>
           )
       }
    });

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