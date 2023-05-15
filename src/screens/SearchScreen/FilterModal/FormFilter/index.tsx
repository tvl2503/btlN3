import React from "react";
import { FilterItemWrapper, FormFilterWrapper, PriceRangeWrapper, TitleFilter } from "./index.styles";

const FormFilter : React.FC = () => {
    return(
        <FormFilterWrapper>
            <FilterItemWrapper>
                <TitleFilter>
                    Lọc theo khoảng giá(đ)
                </TitleFilter>
                <PriceRangeWrapper>
                    
                </PriceRangeWrapper>
            </FilterItemWrapper>
            <FilterItemWrapper>
                <TitleFilter>
                    Lọc theo danh mục
                </TitleFilter>
            </FilterItemWrapper>
            
        </FormFilterWrapper>
    )
}

export default FormFilter