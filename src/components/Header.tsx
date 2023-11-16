import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";

const Header = () => {
  return (
    <nav>
      <Stack direction="row" alignItems="flex-end" px={4} pt={1} pb={2}>
        <Box sx={{ fontSize: '2rem' }}>🏫</Box>
        <Box sx={{ fontSize: '1.5rem' }}>Smart School</Box>
      </Stack>
    </nav>
  );
};

export default Header;
