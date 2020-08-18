import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import ContactPage from '../components/ContactPage'
import HomePage from '../components/HomePage'
import MyWorkPage from '../components/MyWorkPage'
import PortfolioItem from '../components/PortfolioItem'

const AppRouter =()=>(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/portfolio" component={MyWorkPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/portfolio/:id" component={PortfolioItem}/>
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    )

export default AppRouter
