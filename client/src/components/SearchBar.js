import React from "react";


function SearchBar({search,setSearch}){
    // const [search, ] = useState("")

    function handleSearch(e){
        setSearch(e.target.value)
      }
    

    return(
    <div style={{margin:"30px"}}>
        <div id="Seach" style={{marginLeft: "40%", fontSize: "25px"}} >
            <label> Search : 
                <input onChange={handleSearch} type="text" value={search} placeholder="Search by Job title"></input>
            </label>
         
        </div>
         <hr/>
    </div>
    )
}

export default SearchBar;