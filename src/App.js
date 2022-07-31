import {Button, Box, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

export default function App() {
  const MyCustomButton = styled(Button)({
    padding: 10
  });

  return (
    <div>
      <Box textAlign='center' sx={{ p:2, border: '1px dashed black'}}>
        <Typography variant="myVariant" > 
        Material UI example 
        </Typography>
        <Typography sx={{ color: "MyCustomColor.main", m:2 }}> 
        Example Line 
        </Typography>
        <Box textAlign='center'>
  <MyCustomButton sx={{ m:2 }} color='secondary' variant='contained'>
     Click here
  </MyCustomButton>
</Box>
</Box>
    </div>
  );
}

