import { useNFTBalances } from 'react-moralis';
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './bids.css'

export default function Bids() {
  const { data, error, isLoading } = useNFTBalances(
    {
      chain: "0x1",
      address: "0x0B96D62349DeF159655ca16aF82F00DDe3737D4B",
    },
    {
      autoFetch: true,
    },
  );

  if (isLoading) {
    return (
      <p>isLoading</p>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!data?.result || data.result.length === 0) {
    return <p>No result</p>
  }

  return (
   
    <div style={{ display: "", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "20px"  }}>     
      {data.result.map((nft) => (
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                {nft.metadata?.image && (
                  <img
                    src={nft.metadata?.image.replace('ipfs://', 'https://ipfs.moralis.io:2053/ipfs/')}
                    alt=""
                  />
                )}
                <Link to={`/post/123`}>
                  <p className="bids-title">Mountain Landscape</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.20 <span>ETH</span></p>
                <p><AiFillHeart /> 25</p>
              </div>
            </div>
          </div>
        
        
      ))}
    </div>
    
  );
}
