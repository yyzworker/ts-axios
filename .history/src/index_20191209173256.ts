import { AxiosRequestConfig } from './types/index'
import { buildURL } from './helpers/url'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  // TODO
  xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
export default axios
