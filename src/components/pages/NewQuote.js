import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router";
const NewQuote = () => {
const history =useHistory();


const addQuote= quote => {
 console.log(quote);
 history.push('/quotes');
}
    return<QuoteForm onAddQuote={addQuote}/>
}

export default NewQuote;