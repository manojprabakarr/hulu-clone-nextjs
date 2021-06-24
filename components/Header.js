import Image from 'next/image';

import FlashOnIcon from '@material-ui/icons/FlashOn';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import HeaderItem from '../components/Headeritem';

function Header() {

    return (
        <header className="flex flex-col  sm:flex-row m-5 justify-between items-center h-auto  ">
        <div className="flex  flex-grow justify-evenly  max-w-2xl  ">
         <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={FlashOnIcon} />
        <HeaderItem title="Verified" Icon={LiveTvIcon} />
        <HeaderItem title="Collections" Icon={VideoLibraryIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={PersonOutlineIcon} />
        
        </div>

       

      <Image 
      className="object-contain "
      src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
      width={100} height={80}/>
       
            
        </header>
    )
}

export default Header
