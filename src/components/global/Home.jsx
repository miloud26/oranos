import { Box, Button } from '@mui/material'
import {data} from "../../data.js"


import CardItem from './../single/CardItem';
import { Link } from 'react-router-dom';
const Home = () => {
 
  return (
    <Box sx={{padding:"15px"}} width={"100%"}>
        <Box sx={{
            marginBottom:"50px",
            background:"#89BBFE",
            textAlign : "center",
            padding:"25px",
            borderRadius:"15px"
            , fontSize:"22px"
        }}>
            All digital products and accounts for all platforms can be found here at competitive and attractive prices.
        </Box>

        <Box display={"flex"} flexWrap={"wrap"} padding={"5px 50px"} width={"100%"} sx={{justifyContent:"space-between",}}>
            {data.flat().map(item=>{
              return (
               
                  <CardItem  {...item} link={`/${item.id}`}/>
             
              )
            })}
        </Box>


             <Box
                marginTop={"55px"}
                color="#000"
                width={"100%"}
                backgroundColor="#0e062a"
                padding="25px"
                textAlign={"center"}
                borderRadius={"8px"}
              >
                <Box marginTop={"25px"}>
                  <Link target="_blank" to="/privacy">
                    <Button
                      variant="contained"
                      sx={{
                        "&:hover": {
                          background: "#f2f2ff",
                        },
                        background: "#0dffd8",
                        color: "#000",
                        marginRight: "12px",
                        "@media(max-width:700px)": {
                          marginBottom: "10px",
                        },
                      }}
                    >
                      Privacy Policy
                    </Button>
                  </Link>
                  <Link target="_blank" to="/return">
                    <Button
                      variant="contained"
                      sx={{
                        "&:hover": {
                          background: "#f2f2ff",
                        },
                        background: "#0dffd8",
                        color: "#000",
                        marginRight: "12px",
                        "@media(max-width:700px)": {
                          marginBottom: "10px",
                        },
                      }}
                    >
                      Return Policy
                    </Button>
                  </Link>
                </Box>
              </Box>
    </Box>
  )
}

export default Home