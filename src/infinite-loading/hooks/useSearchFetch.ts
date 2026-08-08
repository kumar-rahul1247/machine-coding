import React, {useState, useEffect} from 'react';


const useSearchFetch = (searchTerm: string, pageNumber: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState<Array<string>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setItems([]);
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    // setTimeout(()=>{
    //   const data = Array.from({length:10}, (_, index)=> `Item ${index}` )
    //    setItems((prevItems) => [...prevItems, ...data]);
    //     setHasMore(data.length > 0);
    //     setLoading(false);
    // }, 1000)

    fetch(`https://openlibrary.org/search.json?title=${searchTerm}&page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setItems((prevItems) => [...prevItems, ...data.docs.map((doc: any) => doc.title)]);
        setHasMore(data.docs.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [searchTerm, pageNumber]);

  return { loading, error, items, hasMore };
};

export default useSearchFetch;