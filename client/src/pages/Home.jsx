import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import background1 from '../assets/b1.avif'
import background2 from '../assets/b2.avif'
import background3 from '../assets/b3.avif'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/f5.jpg'
import food3 from '../assets/f6.jpg'
import food4 from '../assets/f7.jpg'
import pizza from '../assets/pizza.jpg'
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function Home() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ flexGrow: '1' }}>
                <Grid container spacing={1}>
                    <Grid item md={4} xs={4}>
                        <img
                            src={background1}
                            width='100%'
                            height='auto'
                        />
                    </Grid>
                    <Grid item md={4} xs={4}>
                        <img
                            src={background2}
                            width='100%'
                            height='auto'
                        />
                    </Grid>
                    <Grid item md={4} xs={4}>
                        <img
                            src={background3}
                            width='100%'
                            height='auto'
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10px' }}>
                <Typography sx={{ fontFamily: 'Ruslan Display, cursive', fontSize: { md: '30px', xs: '15px' }, color: '#004225' }}>It's time to enjoy the finer things in life.</Typography>
                <Typography sx={{ fontFamily: 'Ruslan Display, cursive', fontSize: { md: '20px', xs: '15px' }, color: '#004225' }}>Hot food give you best !!</Typography>
            </Box>

            {/* About section */}
            <Box sx={{ /* marginX: '10px', */ marginTop: '15px', width: '100%' }}>
                <Grid container spacing={1}>
                    <Grid item md={7} xs={6} sx={{ height: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '45px', xs: '18px' }, fontFamily: 'Quicksand, sans-serif' }}>About </Typography>
                        <Typography sx={{ textAlign: 'center', display: { md: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: '20px', paddingX: '5px' }}>
                            In the heart of the city, the hot food restaurant is a beloved destination for food enthusiasts seeking an unforgettable dining experience.
                            Its menu is a fusion of international spices and local influences, creating a symphony of flavors that cater to diverse palates. The chefs,
                            masters of the culinary arts, carefully craft each dish, infusing them with just the right amount of heat and seasoning to awaken the senses.
                            The restaurant's ambiance is a perfect blend of cozy and vibrant, offering a comfortable setting for both intimate dinners and lively gatherings. With its commitment to
                            quality ingredients and a commitment to culinary excellence, the hot food restaurant is a hotspot for those who crave bold and fiery flavors in every bite.
                        </Typography>
                        <Typography sx={{ textAlign: 'center', display: { md: 'none', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: '8px', paddingX: '10px' }}>
                            The hot food restaurant is a culinary haven where sizzling flavors and mouthwatering dishes take center stage. Steaming plates of delectable cuisine, ranging
                            from spicy curries to grilled meats, are expertly prepared to tantalize the taste buds of eager patrons.
                            With an ambiance that exudes warmth and excitement, diners can expect a fiery feast that promises to ignite their culinary passions.
                            Whether it's a spicy adventure or a fiery culinary experience you seek, the hot food restaurant is where flavors come to life in a blaze of delicious glory.
                        </Typography>
                        <br />
                        <Box sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                            <Button size="small" endIcon={<ReadMoreIcon />} sx={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize', fontSize: { xs: '10px', md: '15px' }, border: '1px solid black' }}>
                                Read more
                            </Button>
                        </Box>
                        <Box sx={{ display: { md: 'none', xs: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                            <Button size="small" endIcon={<ReadMoreIcon />} sx={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize', fontSize: '10px', border: '1px solid black' }}>
                                Read more
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item md={5} xs={6}>
                        <img
                            src={food1}
                            width='100%'
                            height='auto'
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Featured dishes */}
            <Box sx={{ width: '100%', marginTop: '30px' }}>
                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '45px', xs: '18px' }, fontFamily: 'Quicksand, sans-serif' }}>
                    Featured Dishes
                </Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '15px', xs: '8px' }, fontFamily: 'Quicksand, sans-serif' }}>
                    Let's enjoy and Make it special
                </Typography>
                <br />
                <Box sx={{ flexGrow: '1' }}>
                    <Grid container >
                        <Grid item md={4} xs={4}>
                            <img
                                src={food2}
                                width='100%'
                                height='auto'
                            />
                        </Grid>
                        <Grid item md={4} xs={4} sx={{ height: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F0F0F0' }}>
                            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '19px', xs: '8px' }, fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold' }}>Chicken Tikka Masala</Typography>
                            <Typography sx={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: '16px', paddingX: '10px', display: { md: 'flex', xs: 'none' } }}>
                                Chicken Tikka Masala is a beloved Indian dish known for its rich and creamy tomato-based sauce. Tender chunks of marinated chicken are grilled to perfection and then
                                simmered in a luscious sauce infused with aromatic spices like cumin, coriander, and garam masala. This flavorful combination of smoky grilled chicken and savory sauce
                                makes Chicken Tikka Masala a true culinary delight,
                                enticing taste buds with its mouthwatering and comforting appeal. It's a classic favorite for those seeking a delicious and satisfying taste of Indian cuisine.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: { xs: '6px' }, paddingX: '10px', display: { md: 'none', xs: 'flex' } }}>
                                Chicken Tikka Masala is a beloved Indian dish known for its rich and creamy tomato-based sauce. Tender chunks of marinated chicken are grilled to perfection and then
                                simmered in a luscious sauce infused with aromatic spices like cumin, coriander, and garam masala. This is so delisious meal.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <img
                                src={food3}
                                width='100%'
                                height='auto'
                            />
                        </Grid>
                        <Grid item md={4} xs={4} sx={{ height: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F0F0F0' }}>
                            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '19px', xs: '8px' }, fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold' }}>Fish and Chip</Typography>
                            <Typography sx={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: '16px', paddingX: '10px', display: { md: 'flex', xs: 'none' } }}>
                                Fish and chips is a quintessential British dish that has captured the hearts and appetites of people around the world. It consists of
                                crisp and golden-fried pieces of white fish, typically cod or haddock, served with a side of thick-cut, perfectly fried potato chips.
                                The hallmark of this dish is its delightful contrast of textures: the fish is flaky and tender on the inside, while the chips are wonderfully
                                crispy on the outside and soft on the inside. Often accompanied by a dollop of tartar sauce and a sprinkle of salt and vinegar,
                                fish and chips is a timeless comfort food that never fails to satisfy cravings for a savory and satisfying meal.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: { xs: '6px' }, paddingX: '10px', display: { md: 'none', xs: 'flex' } }}>
                                Fish and chips is a quintessential British dish that has captured the hearts and appetites of people around the world. It consists of
                                crisp and golden-fried pieces of white fish, typically cod or haddock, served with a side of thick-cut, perfectly fried potato chips.
                                This is very good and healthy food.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <img
                                src={food4}
                                width='100%'
                                height='auto'
                            />
                        </Grid>
                        <Grid item md={4} xs={4} sx={{ height: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F0F0F0' }}>
                            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '19px', xs: '8px' }, fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold' }}>Roasted beef</Typography>
                            <Typography sx={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: '16px', paddingX: '10px', display: { md: 'flex', xs: 'none' } }}>
                                Roasted beef is a culinary masterpiece that celebrates the rich flavors and succulence of prime cuts of beef. To create this dish, a perfectly seasoned
                                piece of beef is slow-cooked in an oven, allowing the meat to develop a mouthwatering crust while retaining its juicy tenderness inside. Whether it's a tender
                                prime rib or a flavorful sirloin, the art of roasting beef enhances its natural flavors, resulting in a deliciously savory and satisfying meal. Often served with a
                                flavorful jus or gravy, roasted beef is a timeless
                                classic that graces the tables of festive gatherings and Sunday dinners.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: { xs: '6px' }, paddingX: '10px', display: { md: 'none', xs: 'flex' } }}>
                                Roasted beef is a culinary masterpiece that celebrates the rich flavors and succulence of prime cuts of beef. To create this dish, a perfectly seasoned
                                piece of beef is slow-cooked in an oven, allowing the meat to develop a mouthwatering crust while retaining its juicy tenderness inside.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Contact */}
            <Box sx={{ width: '100%', marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { md: '45px', xs: '18px' }, fontFamily: 'Quicksand, sans-serif' }}>
                    Contact
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: { md: '15px', xs: '10px' } }}>500 Terry Francois Street, 6th Floor, Colombo 08, CA 94158</Typography>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: { md: '15px', xs: '10px' } }}>hoofood01@gmail.com</Typography>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: { md: '15px', xs: '10px' } }}>+94112845339</Typography>
            </Box>

            {/* footer image */}
            <Box sx={{ width: '100%', height: { md: '60vh', xs: 'auto' }, overflow: 'hidden' }}>
                <img
                    src={pizza}
                    width='100%'
                    height='auto'
                />
            </Box>
        </Box >
    )
}

export default Home