import axios from "axios";
import React from "react";


export default function AxiosGetList({book}) {
  return (
    <div class="container">
        <div class="container text-center">
            <div class="row g-2 m-1">
                {book}
            </div>
        </div>
    </div>
    )
}