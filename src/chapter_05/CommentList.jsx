import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"원도훈",
        comment: "안녕하세요, 원도훈입니다.",
    },
    {
        name:"강호동",
        comment: "안녕하세요, 씨름선수입니다.",
    },
    {
        name:"박지성",
        comment: "안녕하세요, 축구선수입니다.",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
            
        </div>
    );
}

export default CommentList;