import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import role from '../../mock/role'
import article from '../../mock/article'
import remoteSearch from '../../mock/remote-search'
import user from '../../mock/user'

const mocks = [...role, ...article, ...remoteSearch, ...user]

export function setupProdMockServer(prefix) {
  mocks.forEach(api => {
    if (api.url) api.url = prefix + api.url
  })
  createProdMockServer(mocks)
}
