import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message : "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id : 2,
        message : "아침은 된장찌개입니다.",
    },
    {
        id : 3,
        message : "저녁은 김치찜입니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        timer = setInterval(() => {
            if (this.state.notifications.length < reservedNotifications.length){
                const index = this.state.notifications.length;
                const newNotification = reservedNotifications[index];
                this.setState(prevState => ({
                    notifications: [...prevState.notifications, newNotification]
                }));
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }    
}

export default NotificationList;
