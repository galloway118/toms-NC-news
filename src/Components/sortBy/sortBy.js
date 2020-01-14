import React from 'react';

function SortBy() {
    return (

    <div><p>Sort By:</p>
        <button value="created_at" onClick={sort_By} >Date Created</button> 
        <button value="comment_count" onClick={sort_By} >Comment Count</button>
        <button value="votes" onClick={sort_By}>Votes</button>
        <button value="author" onClick={sort_By}>Author</button>
        <button value="title" onClick={sort_By}>Title</button>
        </div>
    )
}


export default SortBy;