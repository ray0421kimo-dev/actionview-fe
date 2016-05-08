import { asyncFuncCreator } from '../utils';

export function index() {
  return asyncFuncCreator({
    constant: 'PROJECT_INDEX',
    promise: (client) => client.request({ url: '/project' })
  });
}

export function create(values) {
  return asyncFuncCreator({
    constant: 'PROJECT_CREATE',
    promise: (client) => client.request({ url: '/project', method: 'post', data: values })
  });
}

export function show(key) {
  return asyncFuncCreator({
    constant: 'PROJECT_SHOW',
    promise: (client) => client.request({ url: '/project/' + key })
  });
}
