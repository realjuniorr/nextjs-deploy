"use client"

import BookDetails from "@library/components/BookDetails";
import BookInfo from "@library/components/BookInfo";
import IBook from "@library/types/IBook";
import React, { FC, useState, useEffect } from "react"
import axios from "axios";
interface BookPageProps{
    params: {
        bookId: string;
    }
}
 
const BookPage: FC<BookPageProps> = ({params: {bookId}}) => {
     const [book,setBook] = useState<IBook>({_id:"",isbn:"",publicationDate:""})
     const fetchBook = async () => {
        try {
            const response = await axios.get("/api/book/find/"+bookId);
            setBook(response.data);
        } catch (error) {}
        [];
    };
    useEffect(() => {
        fetchBook();
        //eslint-disable-next-line
    }, [bookId]);
    return ( 
        <div className="flex w-screen flex-wrap">
            <div className="flex flex-col w-full md:w-1/2 lg:w-2/3">
                <BookInfo {...book}/>
                <BookDetails {...book}/>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
                
            </div>
        </div>
     );
}
 
export default BookPage;