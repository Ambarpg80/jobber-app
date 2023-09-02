import React from "react";
import SearchBar from "./SearchBar";
import JobList from "./JobList";

function JobPosts({allJobs, search, setSearch, onSearch, filteredList}){

    return(
        <div>
            <div><SearchBar onSearch={onSearch} search={search} setSearch={setSearch}/></div>
            <div><JobList allJobs={allJobs} filteredList={filteredList} /></div>
        </div>
    )
}

export default JobPosts