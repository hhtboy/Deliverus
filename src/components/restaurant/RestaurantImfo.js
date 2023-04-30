import {Fragment} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'mui-image';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import RecruitingPartyCard from "./RecruitingPartyCard";
import MenuCard from "./MenuCard";

// 가게 조회 화면 컴포넌트입니다.
// prop으로 보여주고자 하는 가게 이름을 받습니다.

export const RecruitingParty = () => {
    return (<Fragment>
        <Typography component="h6" variant="h6" sx={{mb: 1}}>
            현재 모집 중인 딜리버스
        </Typography>
        <Stack spacing={3}>
            <RecruitingPartyCard />
        </Stack>
        <Button
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            onClick={() => alert("내가 딜리버스 모집하기가 클릭되었습니다.")}
        >내가 딜리버스 모집하기</Button>
    </Fragment>);
}

const RestaurantImfo = ({restaurantName}) => {

    const tempMenuList = [{menuName: "치킨", price: 1000}, {menuName: "피자", price: 2000}, {
        menuName: "짜장면",
        price: 3000
    }, {menuName: "족발", price: 4000}];

    // 이미지를 src/images 디렉토리에서 가져옵니다.
    // 향후 이미지를 카테고리 별로 저장해서 모듈화 해야겠습니다. ex) require(`../../images/restaurant/${category}/${restaurantName}`
    const image = require("../../images/chicken/bhc.png");

    const restaurantDescript = (<Box sx={{
        my: 2, display: "flex", flexDirection: "column", alignItems: "center", border: 1, borderRadius: '16px', py: 2
    }}>
        <Image src={image}
               height="250px"
               widht="250px"
               fit="contain"
               duration={1000}
        />
        <Typography component="h3" variant="h3" sx={{my: 3}}>
            BHC 상도점
        </Typography>
        <Typography component="h6" variant="h6">
            가게 설명 텍스트
        </Typography></Box>);

    const restaurantMenu = (<Fragment>
        <Typography component="h6" variant="h6" sx={{mb: 1}}>
            메뉴
        </Typography>
        <Stack spacing={3}>
            {tempMenuList.map((item, index) => {
                return (<MenuCard key={index} menu={item}/>);
            })}
        </Stack>
    </Fragment>);

    return (
    <>
    <Box component="main" sx={{
    my: 8, mx: 'auto', px: 4, display: "flex", flexDirection: "column", justifyContent: "flex-start", maxWidth: 'md'
    }}>
        {restaurantDescript}
        <RecruitingParty />
        {restaurantMenu}
    </Box>
    </>);
}

export default RestaurantImfo;