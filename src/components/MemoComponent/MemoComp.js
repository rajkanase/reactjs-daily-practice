import React  from "react";

const MemoComponent = ({name}) => {
    console.log('****************Memo Component*********************');
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(MemoComponent);