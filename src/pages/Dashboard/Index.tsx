import { Helmet } from "react-helmet-async";
import ListingsTable from "../../components/ListingTable";
import QuotesTable from "../../components/QuotesTable";

export default function Blank() {
  
  return (
  <div>
    <Helmet>
    <title>CSCI334 | Dashboard</title>
    </Helmet>
    
    <h2 className="text-xl font-medium mb-4">My Listings</h2>
    
    <div className="mb-10">
    <ListingsTable />
    </div>

    <div>
    <h2 className="text-xl font-medium mb-4">My Quotes</h2>
    <QuotesTable />
    </div>
  </div>
  );
}
