import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button, Paper, TextField } from '@mui/material';
import { useInput } from '@/hooks/useInput';
import axios from 'axios';
import { IAllMessage } from '@/types/IAllMessage';
import { urlReq } from '@/helper/getUrl';
//Styles
import styles from '@/styles/pages/MessagePage.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

const MessagePage = () => {
  const author = useInput('')
  const text = useInput('')
  const [allMessage, setAllMessage] = useState<IAllMessage[]>([])

  function sendMessage() {
    axios.post(urlReq + '/message', {author: author.value, text: text.value})
    .then(res => setAllMessage(res.data))
    .catch(err => console.log(err))
  }

  return ( 
    <MainLayout>
      <div className={cn('message')}>
        <div className={cn('message__list')}>
          <Paper className={cn('message__message-item')} elevation={2}>
            <span>Автор: Admin</span>
            <span>Сообщение: Добро пожаловать!</span>
          </Paper>
          {allMessage.map((message, index) => 
            <Paper key={index} className={cn('message__message-item')} elevation={2}>
              <span>Автор: {message.author}</span>
              <span>Сообщение: {message.text}</span>
            </Paper>
          )}
        </div>
        <div className={cn('message__form')}>
          <TextField {...author} id="outlined-basic" label="Автор" variant="outlined" />
          <TextField {...text} id="outlined-basic" label="Текст" variant="outlined" multiline />
          <Button onClick={sendMessage} variant="contained" >Добавить сообщение</Button>
        </div>
      </div>
    </MainLayout>
  );
}
 
export default MessagePage;
