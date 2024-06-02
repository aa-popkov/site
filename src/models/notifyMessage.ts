type TNotifyMessageColor = 'success' | 'error' | 'default'

export interface INotifyMessage {
  msg: string
  color?: TNotifyMessageColor
}
