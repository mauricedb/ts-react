import { useRoutes } from 'react-router-dom';
import { Counter } from './Counter/Counter';
import MovieEditor from './movie-editor/MovieEditor';
import { Movies } from './movies/Movies';
import { Person } from './Person/Person';
import { ShapeEditor } from './shape-editor/ShapeEditor';

export const AppRoutes = () => {
  return useRoutes([
    {
      path: '/counter',
      element: <Counter />,
    },
    {
      path: '/person',
      element: <Person />,
    },
    {
      path: '/movies',
      element: <Movies />,
    },
    {
      path: '/movie-editor',
      element: <MovieEditor />,
    },
    {
      path: '/shape-editor',
      element: <ShapeEditor />,
    },
  ]);
};
