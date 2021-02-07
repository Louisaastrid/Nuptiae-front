import React , {useState,useEffect} from 'react'
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
 search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
 
}));
export default function Search() {
    const classes = useStyles();
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState('');
    const [searchTerm, setSearchTerm]= useState('');

    const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://localhost:44313/api/v1/Catalog/travel')
        .then((response)=>response.json())
        .then((data)=>{
            setLoading(false);
            setData(data);
        })
        .catch((e)=>{
            setLoading(false);
            setError('fetch failed');
        });
    },[]);

    if(loading){
        return <p>loading..</p>;
    }
     if(error !==''){
     return <p>ERROR.. : {error}</p>;
    }
  

    return (
        <div className="test">
            <div className={classes.search}> 
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
               <InputBase
              placeholder="Search…"
               onChange={event=>{setSearchTerm(event.target.value);
         }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}  
              inputProps={{ 'aria-label': 'search' }}
              
            />
            </div>
        {/* <input
         type="text" 
         placeholder="search..." 
         onChange={event=>{setSearchTerm(event.target.value);
         }}
         /> */}
        {data.filter((val)=>{
            if (searchTerm === ""){
                return val
            }else if(val.town.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
            <div>
                <p>{val.town}</p>
            </div>
            );
        })}

        </div>
    )
}
