import { AppBar, Link, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  return ( 
    <div>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Link 
            onClick={() => router.push('http://localhost:3000/chat')} 
            underline="always" 
            style={{color: '#fff', marginRight: 20}}
          >
            Доска сообщений
          </Link>
          <Link 
            onClick={() => router.push('http://localhost:3000/number')} 
            underline="always" 
            style={{color: '#fff'}}
            >
              Средние числа
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default Navbar;

