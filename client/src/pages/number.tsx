import BasicTable from "@/components/BasicTable";
import { urlReq } from "@/helper/getUrl";
import { useInput } from "@/hooks/useInput";
import MainLayout from "@/layout/MainLayout";
import { IGetNumber } from "@/types/IGetNumber";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface sendNumberProps {
  number: number;
  isFactional?: boolean;
  isNegative?: boolean;
}

const NumberPage = () => {
  const number = useInput('')
  const checkbox = useInput('')
  const isNegativeRef = useRef<HTMLInputElement>(null)
  const isFactionalRef = useRef<HTMLInputElement>(null)
  const [history, setHistory] = useState<IGetNumber[]>([])

  function sendNumber() {
    const data: sendNumberProps = {
      number: +number.value,
      isNegative: isNegativeRef.current?.checked,
      isFactional: isFactionalRef.current?.checked
    }

    axios.post(urlReq + '/number', data)
    .then(res => setHistory(prevValue => [res.data, ...prevValue]))
    .catch(e => console.log(e))
  }

  useEffect(() => {
    axios.get(urlReq + '/number')
    .then(res => setHistory(res.data))
    .catch(e => console.log(e))
  }, []);

  return (
    <MainLayout>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <TextField type="number" {...number} id="outlined-basic" label="Введите число" variant="outlined" />
          <FormGroup>
            <FormControlLabel inputRef={isNegativeRef} control={<Checkbox {...checkbox}/>} label="Число отрицательное?" />
            <FormControlLabel inputRef={isFactionalRef} control={<Checkbox />} label="Число дробное?" />
          </FormGroup>
          <Button onClick={sendNumber} variant="contained">Отправить и получить среднее</Button>
        </div>
        <div style={{width: '50%'}}>
          <h2>История:</h2>
          {history[0] && <BasicTable data={history} />}
        </div>
      </div>
    </MainLayout>
  );
}
 
export default NumberPage;