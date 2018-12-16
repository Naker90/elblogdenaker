const React = require("react");

class Article extends React.Component{
    render(){
        return (
            <article>
                <a href={this.props.article.route}> <h2>{this.props.article.name}</h2></a>
                <p>{this.props.article.description}</p>
                <p>Publicado por {this.props.article.author} el dia {this.props.article.date}</p>
            </article>
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