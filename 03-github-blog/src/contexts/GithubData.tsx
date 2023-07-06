import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { githubApi } from '../lib/axios'

interface GithubDataContextType {
  data: any
  fetchData: (user: string) => Promise<void>
}

interface GithubDataProviderProps {
  children: ReactNode
}

export const GithubDataContext = createContext<GithubDataContextType>({
  data: {},
  fetchData: () => new Promise(() => {})
})

export function GithubDataProvider({ children }: GithubDataProviderProps) {
  const [data, setData] = useState<any>()

  const fetchData = useCallback(async (user: string) => {
    const response = await githubApi.get(user)

    setData(response.data)
  }, [])

  useEffect(() => {
    fetchData('ofelipescherer')
  }, [])

  return (
    <GithubDataContext.Provider value={{ data: data, fetchData: fetchData }}>
      {children}
    </GithubDataContext.Provider>
  )
}

export const useGithubData = () => useContext(GithubDataContext)
