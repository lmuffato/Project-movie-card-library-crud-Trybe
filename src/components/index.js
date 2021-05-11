import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieList from '../pages/MovieList'
import MovieDetails from '../pages/MovieDetails'
import NewMovie from '../pages/NewMovie'
import EditMovie from '../pages/EditMovie'
import NotFound from '../pages/NotFound'

export default function Index() {

  return(
    <main>
      <Switch>
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:id/edit" component={EditMovie}/>
        <Route path="/movies/new" component={NewMovie}/>
        <Route path="/movies/:id" component={MovieDetails}/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </main>
  )
}

export { default as Loading } from './Loading';
export { default as MovieForm } from './MovieForm';
export { default as MovieCard } from './MovieCard';
