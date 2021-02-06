import React from 'react'
import Info from '@material-ui/icons/Info'
import NewsArticle from './NewsArticle';



const RightBar = () => {

    const rightBar_style = {
        position: "sticky",
        top: "80px",
        flex : '0.2',
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid lightgray",
        height:" fit-content",
        paddingBottom: "10px",
        marginLeft : "20px",

    };

    const rightBar_header_style = {
        display: "flex",
        alignItems : "center",
        justifyContent : "space-between",
        padding : "10px"
    };

    const h_style = {
        fontSize : "16px",
        fontWeight : "400",

    };

    

    return (
        <div classname = 'rightbar' style={rightBar_style}>
            <div className='rightbar__header' style = {rightBar_header_style}>
                <h2 style = {h_style}>LinkedIn news</h2>
                <Info />
                
            </div>

            <NewsArticle heading = {"Python"} subtitle = {"Python become the best for ml."} />
            <NewsArticle heading = {"React"} subtitle = {"React is growing rapidly."} />
            <NewsArticle heading = {"Java"} subtitle = {"Best for OOP."} />
            <NewsArticle heading = {"C#"} subtitle = {"Want to learn C#"} />
            <NewsArticle heading = {"Django"} subtitle = {"Django a very popular framework."} />
            
        </div>
    )
}

export default RightBar
