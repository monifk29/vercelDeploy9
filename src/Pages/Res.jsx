import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/Appreducer/action";
import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Card from "../componenets/Card";
import { Select } from '@chakra-ui/react'

const Res = () => {
  const resRedux = useSelector((state) => state.AppReducer);
  const authLogin = useSelector((state) => state.AuthReducer);

  const data = resRedux.res.data;

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const [sortPrice,setSortPrice] = useState(data);
  const [priceVl,setPriceVl] = useState();

  const [sortRate,setSortRate] = useState(data);
  const [rateVl,setRateVl] = useState();

 const  handlePrice = () => {
    if(priceVl == "asc"){
        let sortPrice = data.sort((a, b) => {
            return a.price_starts_from - b.price_starts_from;
          });
      
          setSortPrice([...sortPrice]);
    }

    if(priceVl == "desc")
    {
        let sortPrice = data.sort((a, b) => {
            return b.price_starts_from - a.price_starts_from;
          });
      
          setSortPrice([...sortPrice]);
    }

  }

  const  handleRate = () => {
    if(rateVl == "asc"){
        let sortRate = data.sort((a, b) => {
            return a.rating - b.rating;
          });
      
          setSortRate([...sortRate]);
    }

    if(rateVl == "desc")
    {
        let sortRate = data.sort((a, b) => {
            return b.rating - a.rating;
          });
      
          setSortRate([...sortRate]);
    }

  }

  

  useEffect(() => {
    dispatch(getData(page));
  }, [page]);

  console.log(data);

  return (
    <>
      <Box>
<div style={{display:"flex"}}>
    
    <Select onChange={(e) => setPriceVl(e.target.value)} onClick={handlePrice} w="15%" marginLeft="20px" placeholder='Sort By Price'>
  <option value='asc'>Asc </option>
  <option value='desc'>Desc </option>
</Select>

<Select onChange={(e) => setRateVl(e.target.value)} onClick={handleRate} w="15%" marginLeft="20px" placeholder='Sort By Rating'>
  <option value='asc'>Asc </option>
  <option value='desc'>Desc </option>
</Select>

</div>


        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {data?.map((item) => (
            <GridItem>
              <Card {...item} />
            </GridItem>
          ))}
        </Grid>


        <div style={{width: "30%",display:"flex",justifyContent:"space-around", margin:"auto"}}>
            <button style={{backgroundColor:"black",color : "white",padding : "2px 6px"}} onClick={() => setPage(1)}>1</button>
            <button style={{backgroundColor:"black",color : "white",padding : "2px 6px"}} onClick={() => setPage(2)}>2</button>
            <button style={{backgroundColor:"black",color : "white",padding : "2px 6px"}} onClick={() => setPage(3)}>3</button>
            <button style={{backgroundColor:"black",color : "white",padding : "2px 6px"}} onClick={() => setPage(4)}>4</button>
            <button style={{backgroundColor:"black",color : "white",padding : "2px 6px"}} onClick={() => setPage(5)}>5</button>
        </div>
      </Box>
    </>
  );
};

export default Res;
