
const TopRated = (props)=>{

    function filterFunc(){
        // console.log("Filter Func !!");
        props.resFilter();
    }

    return(
        <button id="toprated" className="btn" onClick={filterFunc}>4.5 Up</button>
    )

}


export default TopRated;