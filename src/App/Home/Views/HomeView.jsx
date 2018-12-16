import React from "react";

class Article extends React.Component{
    render(){
        return (
            <a href={this.props.article.route} className="link">
                <article>
                    <h2>{this.props.article.name}</h2>
                    <p>{this.props.article.description}</p>
                    <p>Publicado por {this.props.article.author} el dia {this.props.article.date}</p>
                </article>
            </a>
        )
    }
}

class ArticlesList extends React.Component{
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

function HomeView({renderService}) {

    function render({articles}){
        renderService.reactRender({component: <ArticlesList articles={articles}/>});
    }

    return {
        render: render
    }
}

module.exports = HomeView;