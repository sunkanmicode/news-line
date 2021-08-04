import './showNews.css'

export default function ShowNews({ id, author, title, description, publishedAt, urlToImage,  }) {
    return (
        <div className='showNews'>
            <div className='showNewsImg'>
                <img src={urlToImage} alt={author} />
            </div>
            <h3>{author}</h3>
            <h5>{title}</h5>
            <p>{description}</p>
            <small>{publishedAt}</small>
          {/* <button onClick={deleteItem(author)}>
              Remove
          </button> */}
            
        </div>
    )
}
