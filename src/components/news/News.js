import ShowNews from '../showNews/ShowNews'
import './news.css'

export default function News({ news }) {
    return (
        <div className='new'>
            <h1 className='newTitle'>News</h1>
            <div className='newContainer'>
                { news.map((item, index)=>{
                        return(
                        <ShowNews key={index} {...item}  
                        // deleteItem={deleteItem} 
                         />  
                    )
                })}
               
            </div>
        </div>
    )
}
// 
