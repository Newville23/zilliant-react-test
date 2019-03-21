import axios from 'axios'
import config from './config'

export const getUser = axios.get(`${config.baseUrl}/users/${config.user}`)

export const getRepos = axios.get(`${config.baseUrl}/users/${config.user}/repos`)
