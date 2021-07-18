import QuoteList from "../quotes/QuoteList";
const DUMMY_DATA=[
    {id:'p1', author:'Amal',text:'why so serious'},
    {id:'p2', author:'jos',text:'where there is a will there is a way'}, 
    {id:'p3', author:'Benedict',text:'time is precious'}

]
const AllQuotes = () => {

    return (
        <QuoteList quotes={DUMMY_DATA}/>
    )
}

export default AllQuotes;