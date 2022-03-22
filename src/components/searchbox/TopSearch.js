import React from 'react';
import { Input} from 'antd';
const { Search  } = Input;
const onSearch = value => console.log(value);

 
function TopSearch() {
    return (
        <div>	
            <div className="_top_srch_box1">
                <Search placeholder="Search item by keyword.."  className="_inpt1 _top_srch_box1_inpt" allowClear onSearch={onSearch} />
            </div>
        </div>
    )
}
export default TopSearch;