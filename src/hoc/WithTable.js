import React from "react";
import BirthdayTable from "../components/wrapComponent/BirthdayTable";

const WithTable = (Component) => {
    return (props) => {
        return <Component {...props} />
    }
}

export default WithTable(React.memo(BirthdayTable));