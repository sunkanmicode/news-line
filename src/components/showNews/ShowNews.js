import './showNews.css'

export default function ShowNews({ index, author, title, description, publishedAt, urlToImage,  }) {
    return (
        <div className='showNews'>
            <div className='showNewsImg'>
                <img src={urlToImage} alt={author} />
            </div>
            <h3>{author}</h3>
            <h5>{title}</h5>
            <p>{description}</p>
            <small>{publishedAt}</small>
            {/* <div className='deleteNew'>
            <button onClick={()=>deleteItem(index)}>Delete</button>
            </div> */}
            
        </div>
    )
}
