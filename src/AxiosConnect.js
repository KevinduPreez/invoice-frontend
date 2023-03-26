import axios from "axios";
import React from "react";
import AxiosGetList from "./AxiosGetList";
import AxiosLoading from "./AxiosLoading";

const baseURL = "https://localhost:7034/api/books";

export default function App() {
  const [book, setBook] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    axios.get(baseURL).then((response) => {
      setBook(response.data.map(u =>
        
                <div class="col">
                    <div class="card listCardItem p-2">
                        <div class="card-body">
                            {/* <h5 class="card-title">{u.id}</h5> */}
                            <h6 class="card-subtitle mb-2 text-body-secondary">{u.bookName}</h6>
                            <p class="card-text">{u.price}</p>
                            <span class="badge bg-secondary">{u.category}</span>
                            <p class="card-text">{u.author}</p>
                            <a href={baseURL + "/" + u.id}>
                                <button type="button" class="btn btn-primary m-1">View</button>
                            </a>
                        </div>
                    </div>
                </div>

        ));
      setIsLoading(false);
      console.log(response.data)
    });
  }, []);

    if (!book) return "No books";
    return <>{isLoading ? <AxiosLoading /> : <AxiosGetList book = {book}/>}</>

}


{/* <div class="container text-center">
            <div class="row g-2 m-4"></div>
            </div> */}
