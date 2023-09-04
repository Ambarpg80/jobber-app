import React from "react";
import SearchBar from "./SearchBar";
import JobList from "./JobList";

function JobPosts({allJobs, search, setSearch,filteredList, onPostDelete}){
// 
    return(
        <div>
            <div><SearchBar  search={search} setSearch={setSearch}/></div>
            <div><JobList allJobs={allJobs} filteredList={filteredList}  onPostDelete={ onPostDelete}/> </div>
        </div> // 
    )
}

export default JobPosts