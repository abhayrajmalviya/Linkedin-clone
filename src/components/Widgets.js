import React from 'react'
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <WidgetArticle>
            <WidgetArticleLeft>
                <FiberManualRecordIcon/>
            </WidgetArticleLeft>
            <WidgetArticleRight>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </WidgetArticleRight>
        </WidgetArticle>
    )
  return (
    <WidgetContainer>
        <WidgetHeader>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </WidgetHeader>
        {newsArticle("Abhayraj Malviya is back","Top news - 9089 readers")}
        {newsArticle("Coronavirus: Latest Updates","Top news - 896 readers")}
        {newsArticle("Bitcoins below $20k ","Crypto - 876 readers")}
        {newsArticle("Tesla hits new heights","Cars & Auto - 8000 readers")}
        {newsArticle("is Redux too Good?","Tech - 386 readers")}
    </WidgetContainer>

  )

}

const WidgetContainer = styled.div`
    position: sticky;
    top: 80px ;
    flex :0.2;
    background-color: #fff;
    border-radius:10px;
    border: 1px solid lightgray;
    height:fit-content;
    padding-bottom:10px;

`;
const WidgetHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    h2{
        font-size:16px;
        font-weight:400;
    }
`;
const WidgetArticle = styled.div`
    display: flex;
    padding :10px;
    cursor: pointer;

    :hover{
        background-color: whitesmoke;
    }
`;
const WidgetArticleLeft = styled.div`
    margin-right : 5px;
    color : #0177b7;
`;
const WidgetArticleRight = styled.div`
    flex:1;
    h4{
        font-size: 14px;
    }
    p{
        font-size: 12px;
        color: gray;
    }
`;

export default Widgets