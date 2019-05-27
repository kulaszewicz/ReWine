import React from 'react'

const Action = (props) => (
    <div>
        <button
        className={"big-button"}
        onClick={props.handleActionSubmit}
        >Review my wine!</button>
    </div>
);

export default Action;