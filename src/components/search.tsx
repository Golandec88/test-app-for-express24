import * as React from 'react'
import Search from "antd/lib/input/Search";

type Props = {
    loading?: boolean,
    search: (params: string) => void
}

const AppSearch :React.FC<Props> = ({ search, loading= false }) => {

    const onSearch = (value: string) :void => search(value)

    return (
        <Search
            loading={loading}
            className="app-search"
            placeholder="15 usd in rub"
            enterButton="Convert!"
            size="large"
            onSearch={onSearch}
        />
    )
}
export default AppSearch