import { ButtonLoadMore } from "components/ButtonLoadMore/ButtonLoadMore";
import { Filters } from "components/Filters/Filters";
import { ListTeachers } from "components/ListTeachers/ListTeachers";
import { StyledMain } from "./Teachers.styled";

export default function Teachers() {
    return (
        <StyledMain>
            <Filters />
            <ListTeachers />
            <ButtonLoadMore/>
            
        </StyledMain>
    )
};