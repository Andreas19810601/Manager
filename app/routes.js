// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/features',
      name: 'features',
      getComponent(nextState, cb) {
        import('containers/FeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
    },
    }, 
    
{
  path: '/chattername',
    name: 'chattername',
      getComponent(location, cb) {
        import('components/Chattername')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
},
{
  path: '/',
    name: 'login',
      getComponent(nextState, cb) {
    const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login'),
        ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, component]) => {
      injectReducer('login', reducer.default);
      renderRoute(component);
    });

    importModules.catch(errorLoading);
  }
}, {
  path: '*',
    name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
},


  ];
}

//Um neue Route zu erstellen: sudo npm run generate route