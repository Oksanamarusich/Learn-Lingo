import { InfoAboutTeacher } from "components/InfoAboutTeacher/InfoAboutTeacher"
import { LanguageLevel } from "components/LanguageLevel/LanguageLevel"
import { Button, CardWrapper, WrapperButtonLanguageLevel } from "./TeacherCard.styled"

export const TeacherCard = () => {
    
    return (<CardWrapper>
        <InfoAboutTeacher/>
       <WrapperButtonLanguageLevel>
        <Button>Read more</Button>
        <LanguageLevel/></WrapperButtonLanguageLevel>

    </CardWrapper>)
}