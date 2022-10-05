import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Component } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Grid, Box, Divider, Stack } from "@mui/material";

// export default function Home() {
//   return (
//     <Layout pageTitle="Home Page">
//       {/* <Image src="/profile.png" width={200} height={200} alt="profile"/>
//       <img src="/profile.png" style={{width: 200, height: 200}} alt="profile" /> */}
//       <h1 className="title">Wellcome Offi</h1>
//       <h1 className={styles["title-homepage"]}>Next Js</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque
//         corporis omnis laboriosam voluptate error necessitatibus libero veniam
//         alias, aliquid nulla, explicabo natus aliquam possimus recusandae
//         tenetur vero! Perspiciatis, nihil.
//       </p>

//       <div className='my-6'>
//         <button className="bg-sky-600 text-white p2- px-4 rounded-full hover:opacity-75 hover:text-red-600">
//           Example Button
//         </button>
//       </div>

//     </Layout>
//   );
// }

export default function ofi() {
  return (
    <Grid container paddingTop={4}>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <Box>
          <Typography fontWeight={100}>Kembali</Typography>
        </Box>
        <Box>
          <Image src="/udang.jpg" width={400} height={400} alt="udang" />
        </Box>
        <Box>
          <Image src="/udang.jpg" width={100} height={100} alt="udang" />
        </Box>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <Box paddingTop={4} paddingBottom={2}>
          <Typography fontWeight={500} fontSize={30}>
            Udang Pencet
          </Typography>
          <Typography variant="h6">Stock Tersedia : 341.06 Kg</Typography>
        </Box>
        <Divider />
        <Box paddingTop={4}>
          <Stack direction="row" spacing={2}>
            <Image src="/jam.jpeg" width={30} height={30} />
            <Stack direction="row" spacing={3}>
              <Typography> Tgl. Update </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography> : </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography> 30-09-2022 </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box paddingTop={4}>
          <Stack direction="row" spacing={2}>
            <Image src="/location.jpeg" width={30} height={30} />
            <Stack direction="row" spacing={1}>
              <Typography> Lokasi Seller</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography> : </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography> Kota Jakarta Timur, DKI Jakarta </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box paddingTop={4}>
          <Stack direction="row" spacing={2}>
            <Image src="/file.jpeg" width={30} height={30} />
            <Stack direction="row" spacing={1}>
              <Typography> Min. Order Qty </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography> : </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography color={"#3267E3"}> 250.12 KG</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box paddingTop={4}>
          <Stack direction="row" spacing={2}>
            <Image src="/wallet.jpeg" width={30} height={30} />
            <Stack direction="row" spacing={1}>
              <Typography> Perkiraan Hrg. </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography> : </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography color={"#3267E3"}> IDR 150.000 / Kg</Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <Box
          sx={{
            p: 2,
            boxShadow: 1,
            borderRadius: "10px",
            backgroundColor: "#B4CDE6",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography textAlign="center">
              Isi Data di bawah untuk mengetahui rician harga
            </Typography>
            
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
