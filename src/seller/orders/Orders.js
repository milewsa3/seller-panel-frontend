import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Divider, Pagination, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import FilterSelect from "./FilterSelect";
import OrderPaper from "./OrderPaper";
import OrdersHeader from "./OrdersHeader";
import { availableOrdersTypes } from "./OrdersUtil";
import InvalidOrdersType from "./error/InvalidOrdersType";
import NoProductAvailable from "./error/NoProductAvailable";
import { useEffect, useState } from "react";

const Orders = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [fetchedOrders, setFetchedOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URI}/orders/${params.ordersType}/?page=${
        params.page - 1
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchedOrders(data.content);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [params]);

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
      {fetchedOrders.length > 0 ? (
        <Paper sx={{ mt: 3, p: 5, width: "auto" }}>
          <FilterSelect sx={{ mt: 3, mb: 6 }} />
          <Box display={"flex"} flexDirection={"column"} gap={7}>
            {fetchedOrders.map((order) => (
              <OrderPaper key={order.id} order={order} />
            ))}
            <Stack spacing={2} alignSelf={"center"}>
              <Pagination
                count={totalPages}
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
