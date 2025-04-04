import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            UnityHub
          </Typography>
          <div>
          UnityHub is a premier distributor of cutting-edge gaming products, offering a diverse range of top-tier gaming accessories, including ergonomic chairs, high-performance monitors, and precision peripherals. Our mission is to elevate your gaming experience with the highest quality products and unparalleled customer service. At UnityHub, we bring the best in gaming innovation directly to you.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px" onClick={() => navigate("termsandconditions")}>Terms & Conditions</Typography>
          <Typography mb="30px" onClick={() => navigate("privacypolicy")}>Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px" onClick={() => navigate("refund")}>Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 BBC Whatever Blvd, Bhaktapur
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: devanshashrestha123@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
