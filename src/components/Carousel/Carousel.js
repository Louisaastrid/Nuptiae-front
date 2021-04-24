import React from 'react'
import Slider from 'react-animated-slider';
import  'react-animated-slider/build/horizontal.css';
import Button from '@material-ui/core/Button';
import '../Carousel/carousel.css'
import { Link } from 'react-router-dom';
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

const data = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60',
    title: 'Plannifiez votre voyage à votre image',
    button:'noces de rêve',
    link : '/destinations'
  },
  {
    url: 'https://images.unsplash.com/photo-1605045480816-a7efa537275c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmQlMjB0cmF2ZWx8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60',
    title: 'Trouvez des activités pour votre lune de miel',
    button:'les activités',
    link : '/activites'

  },
  {
    url: 'https://images.unsplash.com/photo-1568130314431-517b84798ae6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG5pY2V8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60',
    title: "À la recherche d'inspiration, consultez nos articles",
    button:"les articles",
    link : '/blog'


  },
  {
    url: 'https://images.unsplash.com/photo-1613388164576-a1c41ee84ec3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFyb2N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60',
    title: 'Créez votre liste et choisissez vos expériences favorites ',
    button:'Créez votre liste',
    link : '/liste'

  },

];


export default function Carousel() {
    return (
                  <ThemeProvider theme={theme}>

        <Slider
         autoplay={3000}
    previousButton={false}
    nextButton={false}
    animateIn ={false}
    hidden={true}
    className="slider-wrapper"
>
	{data.map((item) => (
		<div
			key={item.id}
			style={{ background: `url('${item.url}') no-repeat center center` }}
                      className="slider-content"

		>
			<div className="inner" >
				<h1 >{item.title}</h1>
				<p>{item.description}</p>
            <Link style={{ textDecoration: 'none' }} to={item.link}>
                <Button color="secondary" variant="contained">{item.button}</Button>
             </Link>
			</div>
		</div>
	))}
</Slider>
</ThemeProvider>
    )
}
