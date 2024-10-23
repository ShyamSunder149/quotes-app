import QuoteCard from "@/components/QuoteCard";
import axios from "axios";

async function getQuotesData() {
  const quoteDetails = await axios.get("https://zenquotes.io/api/quotes");
  return quoteDetails.data;
}

export default async function Home() {

  const quoteDetails = await getQuotesData();
  return (
    <div>
      <h1 className="text-center p-5 mx-5 font-extrabold text-5xl">Quotes</h1>
      <div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-10">
        {quoteDetails.map((quote: any) => {
          return <QuoteCard quote={quote.q} name={quote.a} />
        })}
      </div>
    </div>
  )
}
