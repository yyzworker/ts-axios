import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  // TODO
  xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {}
export default axios
