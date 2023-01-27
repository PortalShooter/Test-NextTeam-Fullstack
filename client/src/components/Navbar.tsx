import { url } from "@/helper/getUrl";
import { AppBar, Link, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  return ( 
    <div>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Link 
            onClick={() => router.push(url + '/message')} 
            underline="always" 
            style={{color: '#fff', marginRight: 20}}
          >
            Доска сообщений
          </Link>
          <Link 
            onClick={() => router.push(url + '/number')} 
            underline="always" 
            style={{color: '#fff', marginRight: 20}}
            >
              Средние числа
          </Link>
          <Link 
          onClick={() => router.push('https://github.com/PortalShooter/Test-NextTeam-Fullstack')} 
          underline="always" 
          style={{color: '#fff'}}
          >
            Репозиторий проекта
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default Navbar;

