import React, { useState, useEffect } from 'react'
import axios from "axios"
// import api_key from "../API/api"
import "./Book.css"



function Book() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://openlibrary.org/search.json?author=tolkien&sort=new');
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='main'>
      {books.map(book => {
        console.log(book.author_name)
        if (book.cover_i) {
          return <div key={book.key}> 

            <h3>{(book.title.length > 23) ? book.title.slice(0, 23) : book.title}</h3> 
            <p>{(book.author_name[0].length > 15) ? book.author_name[0].slice(0, 15) : book.author_name[0]}</p>
            {book.cover_i && (

              <div className='imgbox'>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                />
              </div>

            )}
          </div>

        }
        return false
      })}

    </div>
  );
}

export default Book;


