import React, { useEffect, useState } from "react"; // userEffect 제거
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; // 오타 수정

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("==============");
        console.log("useEffect() is called."); // 수정된 로그 메시지
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); // 오타 수정
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div style={{ padding : 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color : "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
