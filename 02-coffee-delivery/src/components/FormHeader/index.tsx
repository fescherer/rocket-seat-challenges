import * as S from './styles'

type FormHeaderProps = {
  icon: any
  color: 'purple' | 'yellow'
  title: string
  description: string
}

export function FormHeader({
  icon,
  color,
  title,
  description
}: FormHeaderProps) {
  return (
    <S.Header color={color}>
      {icon}
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TitleContainer>
    </S.Header>
  )
}
