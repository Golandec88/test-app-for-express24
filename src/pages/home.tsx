import React from "react";
import Search from "antd/lib/input/Search";
import styled from "styled-components";

const IndexPage:React.FC = () => {
    const onSearch = (value: string) :void => {
        console.log(value)
    }

    return (
        <>
            <StyledSearch
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </>
    )
}

const StyledSearch = styled(Search)`
    
`

export default IndexPage