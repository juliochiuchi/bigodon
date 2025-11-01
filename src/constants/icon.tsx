import { Feather } from "@expo/vector-icons"

export const icon = {
  index: (props: any) => <Feather name="home" size={24} {...props} />,
  profile: (props: any) => <Feather name="user" size={24} {...props} />,
  about: (props: any) => <Feather name="info" size={24} {...props} />,
}