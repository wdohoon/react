import React from "react";

const styles = {
    wrapper: {
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection : "row",
        border : "solid 1px red",
        borderRadius: 25,
    },
    imageContainer: {},
    image : {
        width: 50,
        height: 50,
        borderRadius : 25,
    },
    contentContainer: {
        marginLeft: 8,
        display : "flex",
        flexDirection : "column",
        justifyContent: "center",
    },
    nameText : {
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText : {
        fontSize : 16,
    },
};

function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={styles.image} />
            </div>
            
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
};

export default Comment;