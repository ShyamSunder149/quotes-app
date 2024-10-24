import QuoteCard from "@/components/QuoteCard";
import axios from "axios";

interface Quote {
    q: string; 
    a: string;
}

async function getQuotesData() : Promise<Quote[]>{
    const quoteDetails = await axios.get("https://zenquotes.io/api/random");
    return quoteDetails.data;
}

export default async function Home() {
    const quoteDetails = await getQuotesData();
    return (
        <div>
            <h1 className="text-center p-5 mx-5 font-extrabold text-5xl">Random Quote</h1>
            <div className="grid grid-cols-4 gap-4 p-10">
                {quoteDetails.map((quote : Quote) => {
                    return <QuoteCard quote={quote.q} name={quote.a} key={quote.q + quote.a}/>
                })}
            </div>
        </div>
    )
}
