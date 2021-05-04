import '../static/article.css'
import image from '../images/article.jpg'

const Article = () => {
    return (
        <div className="mainArticle">
            <div className='articleBody'>
                <h1>Snacks: <br/>You Need Them</h1>
                <p className='articleText'>And we know all the best ones. <br/>Welcome to the home of the munchable, SnackerRank</p>
            </div>    
            <img className='articleImage' src={image} alt="A sweet snack"></img>
        </div>
    )
}

export default Article