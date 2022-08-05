import React from 'react'

interface UserInfo {
  login: boolean
  // todo lyh
}

type UserInfoSetter = React.Dispatch<React.SetStateAction<UserInfo>>

interface UserInfoContext {
  userInfo: UserInfo
  setUserInfo: UserInfoSetter
}
export const UserContext = React.createContext({} as UserInfoContext)

export default function UserProvider({ children }: { children: JSX.Element }) {
  const [userInfo, setUserInfo] = React.useState({} as UserInfo)
  // todo lyh 浏览器应该有session，此时应该用session去请求服务器判断user登陆状态并请求信息
  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
}
