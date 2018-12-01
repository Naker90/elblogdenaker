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
        renderService.reactRender(<ArticlesList articles={articles}/>);
    }

    return {
        render: render
    }
}

module.exports = HomeView;