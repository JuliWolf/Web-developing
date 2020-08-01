import createHistory from 'history/createBrowserHistory'
const index = createHistory();
const navigate = to => index.push(to);
export { index, navigate };
