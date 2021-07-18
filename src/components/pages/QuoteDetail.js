import { Fragment } from "react";
import { Link, Route, useParams,useRouteMatch } from "react-router-dom";
import Comments from'../comments/Comments';
import HighlightedQuote from'../quotes/HighlightedQuote';
const DUMMY_DATA=[
    {id:'p1', author:'Amal',text:'why so serious'},
    {id:'p2', author:'jos',text:'where there is a will there is a way'}, 
    {id:'p3', author:'Benedict',text:'time is precious'}

]

const QuoteDetail = () => {
const params = useParams();
const match=useRouteMatch();
const quote=DUMMY_DATA.find(data=>data.id===params.quoteId)
    return (
 <Fragment>
 <HighlightedQuote  text={quote.text} author={quote.author}/>
 <Route path={`${match.path}`} exact >
  <div className="centered">
      <Link className="btn--flat" to={`${match.url}/comments`}>Load comments</Link>
  </div>
 </Route>
 <Route path={`${match.path}/comments`}>
  <Comments/>
 </Route>
 </Fragment>
      
    )
}

export default QuoteDetail;