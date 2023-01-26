import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button, Paper, TextField } from '@mui/material';
//Styles
import styles from '@/styles/pages/ChatPage.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

const ChatPage = () => {
  return ( 
    <MainLayout>
      <div className={cn('chat')}>
        <div className={cn('chat__list')}>
          <Paper className={cn('chat__message-item')} elevation={2}>
            <span>Автор: Admin</span>
            <span>Сообщение: Test</span>
          </Paper>
        </div>
        <div className={cn('chat__form')}>
          <TextField id="outlined-basic" label="Автор" variant="outlined" />
          <TextField id="outlined-basic" label="Текст" variant="outlined" multiline />
          <Button variant="contained">Добавить сообщение</Button>
        </div>
      </div>
    </MainLayout>
  );
}
 
export default ChatPage;