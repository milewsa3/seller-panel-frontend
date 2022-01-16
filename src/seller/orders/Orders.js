import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Divider, Pagination, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import FilterSelect from "./FilterSelect";
import OrderPaper from "./OrderPaper";
import OrdersHeader from "./OrdersHeader";
import { availableOrdersTypes } from "./OrdersUtil";
import InvalidOrdersType from "./error/InvalidOrdersType";
import NoProductAvailable from "./error/NoProductAvailable";

const fetchedData = [
  {
    itemFullName: "Book J.K Rowling - “How to be successful?”",
    imgUrl: "/images/orders/notebook.png",
    price: 1540,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "InPost",
  },
  {
    itemFullName: "Book John Flanagan - “How to train your dog?”",
    imgUrl: "/images/orders/notebook.png",
    price: 1200,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "InPost",
  },
  {
    itemFullName: "Book Rick Riordan - “Olimpijscy Herosi?”",
    imgUrl: "/images/orders/notebook.png",
    price: 400,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "DPD",
  },
  {
    itemFullName: "Book John Flanagan - “How to train your dog?”",
    imgUrl: "/images/orders/notebook.png",
    price: 1200,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "InPost",
  },
  {
    itemFullName: "Book Rick Riordan - “Olimpijscy Herosi?”",
    imgUrl: "/images/orders/notebook.png",
    price: 400,
    currency: "zł",
    boughtBy: "Bartosz Zdybel",
    address: "ul. Fiołkowa 24A 05-456 Warszawa",
    telephone: "517307568",
    deliveryCompany: "DPD",
  },
];

const Orders = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    const pathname = location.pathname;
    navigate(pathname.slice(0, pathname.lastIndexOf("/")) + "/" + value);
  };

  if (
    !params.ordersType ||
    availableOrdersTypes.indexOf(params.ordersType) < 0
  ) {
    return <InvalidOrdersType />;
  }

  return (
    <Box sx={{ mx: 10, my: 5 }}>
      <OrdersHeader ordersType={params.ordersType} />
      <Divider />
      {fetchedData.length > 0 ? (
        <Paper sx={{ mt: 3, p: 5, width: "auto" }}>
          <FilterSelect sx={{ mt: 3, mb: 6 }} />
          <Box display={"flex"} flexDirection={"column"} gap={7}>
            {fetchedData.map((order) => (
              <OrderPaper order={order} />
            ))}
            <Stack spacing={2} alignSelf={"center"}>
              <Pagination
                count={10}
                page={parseInt(params.page)}
                color="secondary"
                onChange={handlePageChange}
              />
            </Stack>
          </Box>
        </Paper>
      ) : (
        <NoProductAvailable />
      )}
    </Box>
  );
};

export default Orders;
