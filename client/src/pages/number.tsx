import MainLayout from "@/layout/MainLayout";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";

const NumberPage = () => {
  return (
    <MainLayout>
      <div>
          <TextField id="outlined-basic" label="Введите число" variant="outlined" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Число отрицательное?" />
            <FormControlLabel control={<Checkbox />} label="Число дробное?" />
          </FormGroup>
          <Button variant="contained">Отправить и получить среднее</Button>
        </div>
    </MainLayout>
  );
}
 
export default NumberPage;